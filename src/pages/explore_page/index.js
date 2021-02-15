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
    UserRecommendation,
} from "../../components/right_column_components"
import {
    TopSearchBarContainer,
    // SettingsIcon,
    TopbarContainer,
    // IconContainer,
    ContentListContainer,
    ImageNews,
    ImageTitle,
    ImageSubtitle,
    // WhatsHappeningMoreButton,
} from "./explore_page_components"
import NavigationBar from "../../components/navigation_bar"
import HogwartsImage from "../../images/hogwarts_image.jpg"
import MinistryOfMagic from "../../images/ministry_of_magic.jpeg"
import Prophet from "../../images/prophet.jpg"
import Quidditch from "../../images/quidditch.jpg"
import CelestinaWarbeck from "../../images/celestina_warbeck.png"
import MaleProfile from "../../images/male_profile.jpg"
import FemaleProfile from "../../images/female_profile.jpg"
import SettingsButton from "../../components/settings_button"
import MoreButton from "../../components/more_button"

export default function ExplorePage(){
    document.title = "Explore / Twitter"
    const navigationOptions = [
        {
            id: "for-you",
            text: "For you"
        },
        {
            id: "politics",
            text: "Politics"
        },
        {
            id: "trending",
            text: "Trending"
        },
        {
            id: "news",
            text: "News"
        },
        {
            id: "sports",
            text: "Sports"
        },
        {
            id: "entertainment",
            text: "Entertainment"
        },
    ]

    const [currentSection, setCurrentSection] = React.useState("for-you")

    const handleNavigationClick = (e) => {
        // console.log(e.target.id)
        setCurrentSection(e.target.id)
    }

    const presentContent = () => {
        switch(currentSection){
            case 'for-you':
                return (
                    <ContentListContainer>
                        <ImageNews image={HogwartsImage}>
                            <ImageSubtitle>Hogwarts news · This morning</ImageSubtitle>
                            <ImageTitle>Albus Dumbledore has been reinstated as the headmaster of Hogwarts School of Witchcraft and Wizardry</ImageTitle>
                            <ImageSubtitle>Trending with Albus Dumbledore, Hogwarts</ImageSubtitle>
                        </ImageNews>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Trending at Hogwarts</EntryHeader>
                            <EntryBody>Harry Potter</EntryBody>
                            <EntryFooter>2,546 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Trending at Hogwarts</EntryHeader>
                            <EntryBody>Umbridge</EntryBody>
                            <EntryFooter>3,240 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Politics · Trending</EntryHeader>
                            <EntryBody>Cornelius Fudge</EntryBody>
                            <EntryFooter>14,601 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                    </ContentListContainer>
                )
            case 'politics':
                return (
                    <ContentListContainer>
                        <ImageNews image={MinistryOfMagic}>
                            <ImageSubtitle>News · This morning</ImageSubtitle>
                            <ImageTitle>Cornelius Fudge facing inquiries</ImageTitle>
                            <ImageSubtitle>Trending this morning</ImageSubtitle>
                        </ImageNews>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>News · Ministry of magic</EntryHeader>
                            <EntryBody>Department of Mysteries</EntryBody>
                            {/* <EntryFooter>2,546 Tweets</EntryFooter> */}
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Politics · Trending</EntryHeader>
                            <EntryBody>Umbridge</EntryBody>
                            <EntryFooter>3,240 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Politics · Trending</EntryHeader>
                            <EntryBody>Cornelius Fudge</EntryBody>
                            <EntryFooter>14,601 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                    </ContentListContainer>
                )
            case 'trending':
                return (
                    <ContentListContainer>
                        <ImageNews image={Prophet}>
                            <ImageSubtitle>Trending · This morning</ImageSubtitle>
                            <ImageTitle>Prophecy of the future?</ImageTitle>
                            <ImageSubtitle>Trending this morning</ImageSubtitle>
                        </ImageNews>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Trending</EntryHeader>
                            <EntryBody>Harry Potter: the Chosen One?</EntryBody>
                            <EntryFooter>10,546 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Trending</EntryHeader>
                            <EntryBody>You Know Who Returned!</EntryBody>
                            <EntryFooter>3,240 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Trending</EntryHeader>
                            <EntryBody>Cornelius Fudge: incompetent for the job?</EntryBody>
                            <EntryFooter>44,601 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                    </ContentListContainer>
                ) 
            case 'news': 
                return (
                    <ContentListContainer>
                        <ImageNews image={MinistryOfMagic}>
                            <ImageSubtitle>Headline · This morning</ImageSubtitle>
                            <ImageTitle>You know who broke into the Ministry of Magic last night</ImageTitle>
                            <ImageSubtitle>Trending this morning</ImageSubtitle>
                        </ImageNews>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Headline</EntryHeader>
                            <EntryBody>12 Death Eaters got arrested this morning</EntryBody>
                            {/* <EntryFooter>10,546 Tweets</EntryFooter> */}
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>News</EntryHeader>
                            <EntryBody>Cornelius Fudge facing inquiries at the ministry</EntryBody>
                            {/* <EntryFooter>3,240 Tweets</EntryFooter> */}
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>News</EntryHeader>
                            <EntryBody>Albus Dumbledore has been reinstated as the headmaster of Hogwarts School of Witchcraft and Wizardry</EntryBody>
                            {/* <EntryFooter>44,601 Tweets</EntryFooter> */}
                        </WhatsHappeningEntryContainer>
                    </ContentListContainer>
                )
            case 'sports':
                return (
                    <ContentListContainer>
                        <ImageNews image={Quidditch}>
                            <ImageSubtitle>Headline · This morning</ImageSubtitle>
                            <ImageTitle>Quidditch World Cup will be held in England in 2000</ImageTitle>
                            <ImageSubtitle>Trending this morning</ImageSubtitle>
                        </ImageNews>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Quidditch Meet</EntryHeader>
                            <EntryBody>England Vs France</EntryBody>
                            <EntryFooter>10,546 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Quidditch Meet</EntryHeader>
                            <EntryBody>England Vs Japan</EntryBody>
                            <EntryFooter>13,240 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                    </ContentListContainer>
                )
            case 'entertainment':
                return (
                    <ContentListContainer>
                        <ImageNews image={CelestinaWarbeck}>
                            <ImageSubtitle>Concert Coming Up</ImageSubtitle>
                            <ImageTitle>Celestina Warbeck in Concert</ImageTitle>
                            <ImageSubtitle>Trending</ImageSubtitle>
                        </ImageNews>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Trending</EntryHeader>
                            <EntryBody>Only 100 tickets left for Celestina Warbeck in Concert!</EntryBody>
                            <EntryFooter>40,546 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                        <WhatsHappeningEntryContainer>
                            <MoreButton />
                            <EntryHeader>Trending</EntryHeader>
                            <EntryBody>You Charmed the Heart Right Out of Me</EntryBody>
                            <EntryFooter>13,240 Tweets</EntryFooter>
                        </WhatsHappeningEntryContainer>
                    </ContentListContainer>
                )
            default: 
                return null
        }
    }

    return(
        <PageContainer>
            <MiddlePartContainer>
                <TopbarContainer>
                    <TopSearchBarContainer>
                        <Searchbar />
                        <SettingsButton />
                    </TopSearchBarContainer>
                    <NavigationBar options={navigationOptions} handleNavigationClick={handleNavigationClick} />
                </TopbarContainer>  
                {presentContent()}                    
            </MiddlePartContainer>
            <RightPartContainer>
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