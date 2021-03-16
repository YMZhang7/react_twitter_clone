import React from "react"
import NewTweetModal from "../../components/new_tweet_modal"
import {
    PageContainer,
    MiddlePartContainer,
    RightPartContainer
} from "../../components/page_partition"
import {
    TitleBar,
    // Divider,
    TweetsContainer,
} from "./homepage_components"
import TweetBox from "../../components/tweet_box"
import Searchbar from "../../components/search_bar";
import { 
    RightColumnContentContainer,
    RightColumnContentTitle,
    ShowMoreButton,
    WhatsHappeningEntryContainer,
    EntryHeader,
    EntryBody,
    EntryFooter,
    AcknowledgementContainer,
    UserRecommendation,
} from "../../components/right_column_components"
import MaleProfile from "../../images/male_profile.jpg"
import FemaleProfile from "../../images/female_profile.jpg"
import ProfilePicture from "../../images/profile_picture.jpg"
import OpenedTweet from "../../components/opened_tweet"

export default function Homepage(){
    document.title = "Home / Twitter"

    const [tweetsData, setTweetsData] = React.useState([])
    const [tweetsComponents, setTweetsComponents] = React.useState(null)

    function updateData(data){
        setTweetsData(data)
        setTweetsComponents(data.map((tweet) => <TweetBox key={tweet._id} id={tweet._id} tweet={tweet} onClick={() => handleTweetClick(tweet)} deleteTweet={deleteTweet} />))
    }

    function deleteTweet(id){
        setTweetsData(prev => {
            let newTweetsData = prev.filter(tweet => tweet._id != id)
            setTweetsComponents(newTweetsData.map((tweet) => <TweetBox key={tweet._id} id={tweet._id} tweet={tweet} onClick={() => handleTweetClick(tweet)} deleteTweet={deleteTweet} />))
            return newTweetsData
        })

        fetch('/api/tweets', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
        }).then(response => response.json())
    }

    function loadData(){
        fetch('/api/tweets').then(response => {
            if (response.ok){
                console.log(response)
                response.json().then(data => {
                    console.log(data)
                    console.log('Total number of tweets: ' + data._metadata.total_count)
                    data.tweets.forEach(tweet => {
                        tweet.photo = MaleProfile
                    })
                    // console.log('hhhhh ' + data.tweets[0]._id)
                    // setTweetsComponents(data.tweets.map((tweet) => <TweetBox key={tweet._id} id={tweet._id} tweet={tweet} onClick={() => handleTweetClick(tweet)} deleteTweet={deleteTweet} />))
                    updateData(data.tweets)
                })
            }
        }).catch(err => {
            console.log('Error: ' + err)
        })
    }

    React.useEffect(() => {
        loadData()
    }, [])


    const [showTweet, setShowTweet] = React.useState(null)
    const handleTweetClick = (tweet) => {
        setShowTweet(tweet)
    }
    const closeOpenTweet = () => setShowTweet(null)

    
    const addNewTweet = (tweet) => {
        console.log(tweetsComponents)
        setTweetsData(prev => [...prev, tweet])
        setTweetsComponents(prev => [...prev, <TweetBox key={tweet._id} id={tweet._id} tweet={tweet} onClick={() => handleTweetClick(tweet)} deleteTweet={deleteTweet} />])
    }

    return (
        <PageContainer>
            <OpenedTweet tweet={showTweet} closeTweet={closeOpenTweet} />
            <MiddlePartContainer>
                <TitleBar>Home</TitleBar>
                <TweetsContainer>
                    <NewTweetModal  width="99%" addNewTweet={addNewTweet} />
                    {tweetsComponents}
                </TweetsContainer>
            </MiddlePartContainer>
            <RightPartContainer>
                <Searchbar />
                <RightColumnContentContainer>
                    <RightColumnContentTitle>What's happening</RightColumnContentTitle>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>Trending at Hogwarts</EntryHeader>
                        <EntryBody>Albus Dumbledore has been reinstated as the headmaster of Hogwarts School of Witchcraft and Wizardry</EntryBody>
                        <EntryFooter>10,527 Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>Trending at Hogwarts</EntryHeader>
                        <EntryBody>Harry Potter</EntryBody>
                        <EntryFooter>2,546 Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>News · Trending</EntryHeader>
                        <EntryBody>You Know Who</EntryBody>
                        <EntryFooter>261K Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>Politics · Trending</EntryHeader>
                        <EntryBody>Cornelius Fudge</EntryBody>
                        <EntryFooter>14,601 Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>News · Trending</EntryHeader>
                        <EntryBody>Ministry of Magic</EntryBody>
                        <EntryFooter>58.9K Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <ShowMoreButton>Show more</ShowMoreButton>
                </RightColumnContentContainer>
                <RightColumnContentContainer>
                    <RightColumnContentTitle>Who to follow</RightColumnContentTitle>
                    <UserRecommendation image={MaleProfile} name="Harry Potter" username="@Harry Potter" />
                    <UserRecommendation image={FemaleProfile} name="Hermione Granger" username="@Hermione Granger" />
                    <ShowMoreButton>Show more</ShowMoreButton>
                </RightColumnContentContainer>
                <AcknowledgementContainer>
                    This is YM Zhang's clone of twitter. 
                    <br/>All rights belong to Twitter, Inc.
                </AcknowledgementContainer>
            </RightPartContainer>
        </PageContainer>
    )
}

