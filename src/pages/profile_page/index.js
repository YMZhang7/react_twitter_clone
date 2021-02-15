import React from "react"
import { MiddlePartContainer, PageContainer, RightPartContainer } from "../../components/page_partition"
import { Titlebar } from "../bookmarks_page/bookmarks_page_components"
import {
    UserProfileContainer,
    ContentContainer,
    UpperContainer,
    LowerContainer,
    UserPhoto,
    DateJoined,
    FollowStatus,
    EditProfileButton,
    UserName
} from "./profile_page_components"
import {
    RightColumnContentContainer,
    RightColumnContentTitle,
    WhatsHappeningEntryContainer,
    EntryBody,
    EntryFooter,
    EntryHeader,
    ShowMoreButton,
    UserRecommendation,
} from "../../components/right_column_components"
import Searchbar from "../../components/search_bar"
import SnowImage from "../../images/snow_image.jpg"
import ProfilePicture from "../../images/profile_picture.jpg"
import MaleProfile from "../../images/male_profile.jpg"
import FemaleProfile from "../../images/female_profile.jpg"
import UserAtText from "../../components/user_at_text"
import { BsCalendar } from "react-icons/bs"
import NavigationBar from "../../components/navigation_bar"
import TweetBox from "../../components/tweet_box"

export default function ProfilePage(){
    document.title = '@Twitter / Twitter'

    const navigationOptions = [
        {
            id: "tweets",
            text: "Tweets"
        },
        {
            id: "tweets-and-replies",
            text: "Tweets & replies",
        },
        {
            id: "media",
            text: "Media",
        },
        {
            id: "likes",
            text: "Likes"
        }
    ]

    const handleNavigationClick = (e) => {
        console.log(e.target.id)
    }

    const yourTweets = [
        {
            id: 2,
            timestamp: new Date(2021, 1, 2),
            photo: ProfilePicture,
            name: "Twitter",
            username: "@Twitter",
            content: "This is the first ever tweet written on my twitter clone. Happy Birthday!",
            likes: 100,
            comments: [], // TODO: change into array later
            retweet: 30,
        },
    ]

    const handleTweetClick = () => {
        console.log('you are viewing your own tweets')
    }

    const tweetsComponents = yourTweets.map((tweet) => <TweetBox key={tweet.id} tweet={tweet} onClick={() => handleTweetClick(tweet)} />)
    
    return(
        <PageContainer>
            <MiddlePartContainer>
                <Titlebar>Twitter</Titlebar>
                <ContentContainer>
                    <UserProfileContainer>
                        <UserPhoto image={ProfilePicture} />
                        <UpperContainer backgroundImage={SnowImage}></UpperContainer>
                        <LowerContainer>
                            <EditProfileButton>Edit profile</EditProfileButton>
                            <UserName>Twitter</UserName>
                            <UserAtText  text="@Twitter" />
                            <DateJoined><BsCalendar />Joined January 2021</DateJoined>
                            <FollowStatus><b style={{color: "black"}}>10</b> Following <b style={{color: "black"}}>10</b> Followers</FollowStatus>
                        </LowerContainer>
                    </UserProfileContainer>
                    <NavigationBar options={navigationOptions} handleNavigationClick={handleNavigationClick} />
                    {tweetsComponents}
                </ContentContainer>
            </MiddlePartContainer>
            <RightPartContainer>
            <Searchbar />
                <RightColumnContentContainer>
                    <RightColumnContentTitle>You might like</RightColumnContentTitle>
                    <UserRecommendation image={MaleProfile} name="Harry Potter" username="@Harry Potter" />
                    <UserRecommendation image={FemaleProfile} name="Hermione Granger" username="@Hermione Granger" />
                    <ShowMoreButton>Show more</ShowMoreButton>
                </RightColumnContentContainer>
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
            </RightPartContainer>
        </PageContainer>
    )
}