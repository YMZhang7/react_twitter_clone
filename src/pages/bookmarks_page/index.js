import React from "react"
import { MiddlePartContainer, PageContainer, RightPartContainer } from "../../components/page_partition"
import {
    Titlebar,
    SavedTweetsContainer,
    Title,
    SubTitle
} from "./bookmarks_page_components"
import {
    RightColumnContentContainer, 
    RightColumnContentTitle, 
    ShowMoreButton,
    WhatsHappeningEntryContainer,
    EntryHeader,
    EntryBody,
    EntryFooter,
    UserRecommendation
} from "../../components/right_column_components"
import UserAtText from "../../components/user_at_text"
import Searchbar from "../../components/search_bar"
import MaleProfile from "../../images/male_profile.jpg"
import FemaleProfile from "../../images/female_profile.jpg"

export default function BookmarksPage(){
    document.title = 'Bookmarks / Twitter'

    return(
        <PageContainer>
            <MiddlePartContainer>
                <Titlebar>
                    Bookmarks
                    <br/>
                    <UserAtText text="@Twitter" />
                </Titlebar>
                <SavedTweetsContainer>
                    {/* {savedTweets.length == 0 ? : } */}
                    <Title>You haven’t added any Tweets to your Bookmarks yet</Title>
                    <SubTitle>When you do, they’ll show up here.</SubTitle>
                </SavedTweetsContainer>
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
            </RightPartContainer>
        </PageContainer>
    )
}