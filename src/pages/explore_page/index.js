import React from "react"
import Searchbar from "../../components/search_bar"
import {
    PageContainer,
    MiddlePartContainer,
    RightPartContainer,
} from "../../components/page_partition"
import {
    RightColumnContentContainer,
    RightColumnContentTitle,
    ShowMoreButton,
    WhatsHappeningEntryContainer,
    EntryHeader,
    EntryBody,
    EntryFooter,
} from "../../components/right_column_components"
import {
    TopSearchBarContainer,
    SettingsIcon,
    TopbarContainer,
    IconContainer,
    ContentListContainer,
    ImageNews,
    ImageTitle,
    ImageSubtitle,

} from "./explore_page_components"
import NavigationBar from "../../components/navigation_bar"
import SnowImage from "../../images/snow_image.jpg"

export default function ExplorePage(){
    document.title = "Explore / Twitter"
    return(
        <PageContainer>
            <MiddlePartContainer>
                <TopbarContainer>
                    <TopSearchBarContainer>
                        <Searchbar />
                        <IconContainer><SettingsIcon /></IconContainer>
                    </TopSearchBarContainer>
                    <NavigationBar />
                </TopbarContainer>
                <ContentListContainer>
                    <ImageNews image={SnowImage}>
                        <ImageSubtitle>US news · This morning</ImageSubtitle>
                        <ImageTitle>Jeff Bezos to step down as Amazon CEO</ImageTitle>
                        <ImageSubtitle>Trending with Jeff Bezos, Amazon</ImageSubtitle>
                    </ImageNews>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>Trending in Australia</EntryHeader>
                        <EntryBody>Pete Evans</EntryBody>
                        <EntryFooter>2,546 Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>Trending in Australia</EntryHeader>
                        <EntryBody>Pete Evans</EntryBody>
                        <EntryFooter>2,546 Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                    <WhatsHappeningEntryContainer>
                        <EntryHeader>Trending in Australia</EntryHeader>
                        <EntryBody>Pete Evans</EntryBody>
                        <EntryFooter>2,546 Tweets</EntryFooter>
                    </WhatsHappeningEntryContainer>
                </ContentListContainer>
            </MiddlePartContainer>
            <RightPartContainer>
                <RightColumnContentContainer>
                    <RightColumnContentTitle>Who to follow</RightColumnContentTitle>
                    <ShowMoreButton>Show more</ShowMoreButton>
                </RightColumnContentContainer>
            </RightPartContainer>
        </PageContainer>
    )
}