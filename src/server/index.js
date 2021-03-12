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
    if (req.query.tweetId != null){
        let selected = []
        db.collection('tweets').find({_id: new mongo.ObjectId(req.query.tweetId)}).toArray().then(comments => {
            selected.push(comments[0])
            console.log(selected)
        }).then(() => {
            console.log(selected)
            res.json({tweets: selected})
        })
    } else {
        db.collection('tweets').find().toArray().then(tweets => {
            const metadata = {
                total_count: tweets.length,
            }
            res.json({_metadata: metadata, tweets: tweets})
        }).catch(err => {
            console.log('Error: ' + err)
            res.status(500).json({ message: `Internal Server Error: ${err}`})
        })
    }
})

app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../../build/index.html'));
});

app.post('/api/tweets', (req, res) => {
    // console.log(req.body)
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
    // res.json({})
})