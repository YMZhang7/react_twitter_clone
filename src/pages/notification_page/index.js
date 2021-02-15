import React from "react"
import {
    MiddlePartContainer,
    PageContainer,
    RightPartContainer,
} from "../../components/page_partition"
import{
    Titlebar,
    NotificationsContainer,
    NotificationContainer,
    NotificationLabel,
    NotificationContent,
    Photo,

} from "./notification_page_components"
import SettingsButton from "../../components/settings_button"
import NavigationBar from "../../components/navigation_bar";
import Searchbar from "../../components/search_bar";
import { 
    RightColumnContentContainer, 
    RightColumnContentTitle, 
    ShowMoreButton,
    WhatsHappeningEntryContainer,
    EntryHeader,
    EntryBody,
    EntryFooter,
    UserRecommendation
} from "../../components/right_column_components";
import MaleProfile from "../../images/male_profile.jpg"
import FemaleProfile from "../../images/female_profile.jpg"
import TweetBox from "../../components/tweet_box";
import MoreButton from "../../components/more_button";

export default function NotificationPage(){
    document.title = 'Notifications / Twitter'
    const [all, setAll] = React.useState(true)

    const handleNavigationClick = (e) => {
        if (e.target.id === "all")  setAll(true)
        else    setAll(false)
    }

    const navigationOptions = [
        {
            id: "all",
            text: "All"
        },
        {
            id: "mentions",
            text: "Mentions"
        }
    ]

    const allNotifications = [
        {
            id: 1,
            photo: MaleProfile,
            name: "Harry Potter",
            content: "Hello Muggles!"
        },
        {
            id: 2,
            photo: FemaleProfile,
            name: "Hermione Granger",
            content: "Have you finished your homework?"
        },
        {
            id: 3,
            photo: MaleProfile,
            name: "Ronald Weasley",
            content: "People around here are insane."
        },
        {
            id: 4,
            photo: MaleProfile,
            name: "Fred Weasley",
            content: "Knock Knock!"
        }
    ]
    const allNotificationsComponents = allNotifications.map((e) => 
        <NotificationContainer key={e.content}>
            <Photo image={e.photo} />
            <MoreButton />
            <NotificationLabel>{"Recent Tweet from " + e.name}</NotificationLabel>
            <NotificationContent>{e.content}</NotificationContent>
        </NotificationContainer>
    )

    const mentions = [
        // {
        //     id: 1,
        //     timestamp: new Date(2021, 1, 2),
        //     photo: FemaleProfile,
        //     name: "Hermione Granger",
        //     username: "@Hemione Granger",
        //     content: "Congratulations on finishing your homework! @Twitter",
        //     likes: 10,
        //     comments: 15, // TODO: change into array later
        //     retweet: 5,
        // },
        {
            id: 1,
            timestamp: new Date(2021, 1, 2),
            photo: FemaleProfile,
            name: "Hermione Granger",
            username: "@Hemione Granger",
            content: "Congratulations on finishing your homework! @Twitter",
            likes: 10,
            comments: [
                {
                    timestamp: new Date(2021, 1, 2),
                    photo: MaleProfile,
                    name: "Ron Weasley",
                    username: "@Ron Weasley",
                    content: "Give me a break...",
                    likes: 5,
                    comments: [],
                    retweet: 0,
                }
            ], // TODO: change into array later
            retweet: 5,
        },
    ]

    const mentionsComponents = mentions.map((e) => 
        <TweetBox key={e.id} tweet={e} />
    )

    return(
        <PageContainer>
            <MiddlePartContainer>
                <Titlebar>
                    Notification
                    <SettingsButton />
                </Titlebar>
                <NavigationBar options={navigationOptions} handleNavigationClick={handleNavigationClick} />
                <NotificationsContainer>
                    {all ? allNotificationsComponents : mentionsComponents}
                </NotificationsContainer>
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