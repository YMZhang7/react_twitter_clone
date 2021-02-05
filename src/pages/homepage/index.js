import React from "react"
import NewTweetModal from "../../components/new_tweet_modal"
import {
    PageContainer,
    MiddlePartContainer,
    RightPartContainer
} from "../../components/page_partition"
import {
    TitleBar,
    Divider,
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

export default function Homepage(){
    document.title = "Home / Twitter"

    return (
        <PageContainer>
            <MiddlePartContainer>
                <TitleBar>Home</TitleBar>
                <TweetsContainer>
                    <NewTweetModal  width="100%" />
                    {/* <Divider /> */}
                    <TweetBox />
                    <TweetBox />
                    <TweetBox />
                    <TweetBox />
                    <TweetBox />
                    <TweetBox />
                    <TweetBox />
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
                    <UserRecommendation image={FemaleProfile} name="Hermione Grangerbbbbbbbbbbbbbbbbb" username="@Hermione Granger" />
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

