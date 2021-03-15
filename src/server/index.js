const express = require('express')
const path = require('path')
const app = express()
const mongo = require('mongodb')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const MongoClient = mongo.MongoClient
const dbUrl = 'mongodb://localhost'
let db

MongoClient.connect(dbUrl, (err, client) => {
    if (err)  throw err
    db = client.db('swisher')
    app.listen(3000, () => console.log('Server listening on 3000'))
})

app.use(express.static(path.resolve(__dirname, '../../build')));

app.get('/api/tweets', (req, res) => {
    db.collection('tweets').find().toArray().then(tweets => {
        const metadata = {
            total_count: tweets.length,
        }
        res.json({_metadata: metadata, tweets: tweets})
    }).catch(err => {
        console.log('Error: ' + err)
        res.status(500).json({ message: `Internal Server Error: ${err}`})
    })
})

app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../../build/index.html'));
});

app.post('/api/tweets', (req, res) => {
    if (req.body.getComments){
        const commentsId = req.body.comments
        let criteria = []
        for (let id of commentsId){
            criteria.push(new mongo.ObjectId(id))
        }
        db.collection('tweets').find({"_id": {"$in": criteria}}).toArray().then(tweets => {
            console.log(tweets)
            res.json({comments: tweets})
        })
    } else {
        const newTweet = req.body
        newTweet.sender = new mongo.ObjectId(newTweet.sender)
        let id
        db.collection('tweets').insert(newTweet, (err, doc) => {
            if (err)    console.log("Error when inserting: " + err)
            id = doc._id 
        })
        newTweet._id = id
        // console.log(newTweet)
        res.json(newTweet)
    }
})

app.post('/api/tweets/reply', (req, res) => {
    const newTweet = req.body
    console.log(newTweet)
    newTweet.sender = new mongo.ObjectId(newTweet.sender)
    let id
    db.collection('tweets').insert(newTweet, (err, doc) => {
        if (err)    console.log("Error when inserting: " + err)
        newTweet._id = doc._id 
    })
    db.collection('tweets').update({"_id" : new mongo.ObjectId(newTweet.replyTo)}, {$push: {comments: new mongo.ObjectId(newTweet._id)}})
    res.json(newTweet)
})