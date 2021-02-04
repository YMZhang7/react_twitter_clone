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
    AcknowledgementContainer
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
} from "../../components/right_column_components"

export default function Homepage(){
    document.title = "Home / Twitter"

    return (
        <PageContainer>
            <MiddlePartContainer>
                <TitleBar>Home</TitleBar>
                <TweetsContainer>
                    <NewTweetModal  width="100%" />
                    <Divider />
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

