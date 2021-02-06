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
        <NotificationContainer>
            <Photo image={e.photo} />
            <MoreButton />
            <NotificationLabel>{"Recent Tweet from " + e.name}</NotificationLabel>
            <NotificationContent>{e.content}</NotificationContent>
        </NotificationContainer>
    )

    const mentions = [
        {
            id: 1,
            timestamp: new Date(2021, 1, 2),
            photo: FemaleProfile,
            name: "Hermione Granger",
            username: "@Hemione Granger",
            content: "Congratulations on finishing your homework! @Twitter",
            likes: 10,
            comments: 15, // TODO: change into array later
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