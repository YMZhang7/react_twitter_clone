import React from "react"
import NewTweetModal from "../../components/new_tweet_modal"
import {
    HomepageContainer,
    HomepageBodyContainer,
    TitleBar,
    Divider,
    RightSidebarContainer,
    TweetsContainer,
    RightsideContentContainer,
    RightsideContentTitle,
    WhatsHappeningEntryContainer,
    EntryHeader,
    EntryBody,
    EntryFooter,
    ShowMoreButton,
    AcknowledgementContainer
} from "./homepage_components"
import TweetBox from "../../components/tweet_box"
import { AiOutlineSearch } from "react-icons/ai"
import Searchbar from "../../components/search_bar";

export default function Homepage(){
    document.title = "Home / Twitter"

    return (
        <HomepageContainer>
            <HomepageBodyContainer>
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
            </HomepageBodyContainer>
            <RightSidebarContainer>
                <Searchbar />
                <RightsideContentContainer>
                    <RightsideContentTitle>What's happening</RightsideContentTitle>
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
                </RightsideContentContainer>

                <RightsideContentContainer>
                    <RightsideContentTitle>Who to follow</RightsideContentTitle>
                    <ShowMoreButton>Show more</ShowMoreButton>
                </RightsideContentContainer>
                <AcknowledgementContainer>
                    This is YM Zhang's clone of twitter. 
                    <br/>All rights belong to Twitter, Inc.
                </AcknowledgementContainer>
            </RightSidebarContainer>
        </HomepageContainer>
    )
}

