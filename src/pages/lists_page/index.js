import React from "react"
import { MiddlePartContainer, PageContainer, RightPartContainer } from "../../components/page_partition"
import { RightColumnContentContainer } from "../../components/right_column_components"
import {Titlebar} from "../../components/title_bar"
import {
    ButtonGroup,
    MoreButton,
    NewListbutton,
    BodyContainer,
    ContentContainer,
    ContentTitle,
    ContentBody,
    
} from "./lists_page_components"
import {
    RightColumnContentTitle,
    WhatsHappeningEntryContainer,
    EntryHeader,
    EntryBody,
    EntryFooter,
    ShowMoreButton,
    UserRecommendation,
} from "../../components/right_column_components"
import MaleProfile from "../../images/male_profile.jpg"
import FemaleProfile from "../../images/female_profile.jpg"


export default function ListsPage(){
    return(
        <PageContainer>
            <MiddlePartContainer>
                <Titlebar>
                    Lists
                    <ButtonGroup>
                        <NewListbutton />
                        <MoreButton />
                    </ButtonGroup>
                </Titlebar>
                <BodyContainer>
                    <ContentContainer>
                        <ContentTitle>Pinned Lists</ContentTitle>
                        <ContentBody>
                            Nothing to see here yet – pin your favourite Lists to access them quickly.
                        </ContentBody>
                    </ContentContainer>
                    <ContentContainer>
                        <ContentTitle>Discover new Lists</ContentTitle>
                        <ContentBody>
                            Nothing to see here yet – pin your favourite Lists to access them quickly.
                        </ContentBody>
                    </ContentContainer>
                    <ContentContainer>
                        <ContentTitle>Your Lists</ContentTitle>
                        <ContentBody>
                            You haven’t created or followed any Lists. When you do, they’ll show up here.
                        </ContentBody>
                    </ContentContainer>
                </BodyContainer>
            </MiddlePartContainer>
            <RightPartContainer>
                <RightColumnContentContainer>
                    <RightColumnContentTitle>Trends for you</RightColumnContentTitle>
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
            </RightPartContainer>
        </PageContainer>
    )
}