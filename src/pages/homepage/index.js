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
            comments: 15, // TODO: change into array later
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
            comments: 20, // TODO: change into array later
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
                        <EntryHeader>US News · Last night</EntryHeader>
                        <EntryBody>Evan Rachel Wood and at least four other women make allegations of abuse against Marilyn Manson</EntryBody>
                        <EntryFooter>2,527 Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>Trending in Australia</EntryHeader>
                        <EntryBody>Pete Evans</EntryBody>
                        <EntryFooter>2,546 Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>News · Trending</EntryHeader>
                        <EntryBody>Marjorie Taylor Greene</EntryBody>
                        <EntryFooter>261K Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>Politics · Trending</EntryHeader>
                        <EntryBody>hunter biden</EntryBody>
                        <EntryFooter>24.8K Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>Politics · Trending</EntryHeader>
                        <EntryBody>Mitch McConnell</EntryBody>
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

