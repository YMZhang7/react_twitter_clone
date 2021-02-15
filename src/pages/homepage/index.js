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

    const tweets = [
        {
            id: 1,
            timestamp: new Date(2021, 1, 2),
            photo: FemaleProfile,
            name: "Hermione Granger",
            username: "@Hemione Granger",
            content: "Congratulations on finishing your homework! @Twitter",
            likes: 10,
            comments: [
                {
                    timestamp: new Date(2021, 1, 2),
                    photo: MaleProfile,
                    name: "Ron Weasley",
                    username: "@Ron Weasley",
                    content: "Give me a break...",
                    likes: 5,
                    comments: [],
                    retweet: 0,
                }
            ], // TODO: change into array later
            retweet: 5,
        },
        {
            id: 2,
            timestamp: new Date(2021, 1, 2),
            photo: ProfilePicture,
            name: "Twitter",
            username: "@Twitter",
            content: "This is the first ever tweet written on my twitter clone. Happy Birthday!",
            likes: 100,
            comments: [], // TODO: change into array later
            retweet: 30,
        },
    ]

    const [showTweet, setShowTweet] = React.useState(null)
    const handleTweetClick = (tweet) => {
        setShowTweet(tweet)
    }
    const closeOpenTweet = () => setShowTweet(null)

    const tweetsComponents = tweets.map((tweet) => <TweetBox key={tweet.id} tweet={tweet} onClick={() => handleTweetClick(tweet)} />)


    return (
        <PageContainer>
            <OpenedTweet tweet={showTweet} closeTweet={closeOpenTweet} />
            <MiddlePartContainer>
                <TitleBar>Home</TitleBar>
                <TweetsContainer>
                    <NewTweetModal  width="99%" />
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

