import React from "react"
import { MiddlePartContainer, PageContainer, RightPartContainer } from "../../components/page_partition"
import {
    Titlebar,
    SavedTweetsContainer,
    Title,
    SubTitle
} from "./bookmarks_page_components"
import {
    RightColumnContentContainer, RightColumnContentTitle, ShowMoreButton,
} from "../../components/right_column_components"
import UserAtText from "../../components/user_at_text"
import Searchbar from "../../components/search_bar"

export default function BookmarksPage(){
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
                    <ShowMoreButton>Show more</ShowMoreButton>
                </RightColumnContentContainer>
                <RightColumnContentContainer>
                    <RightColumnContentTitle>Who to follow</RightColumnContentTitle>
                    <ShowMoreButton>Show more</ShowMoreButton>
                </RightColumnContentContainer>
            </RightPartContainer>
        </PageContainer>
    )
}