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
    document.title = 'Lists / Twitter'

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