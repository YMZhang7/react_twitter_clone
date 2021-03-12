import React from "react"
import {
    ModalContainer,
    // UserPhoto,
    // Photo,
    TweetEdittingContainer,
    InputArea,
    AccessibilitySettingContainer,
    AccessibilitySettings,
    TopContainer,
    BottomContainer,
    ButtonsGroupContainer,
    RoundButtonContainer,
} from "./new_tweet_modal_components"
import UserPhoto from "../user_photo"
import ProfilePicture from "../../images/profile_picture.jpg"
import { GiEarthAmerica } from "react-icons/gi"
import { BiCalendar } from "react-icons/bi"
import { GrEmoji } from "react-icons/gr"
import { IoImageOutline, IoStatsChartSharp } from "react-icons/io5"
import { RiFileGifLine } from "react-icons/ri"
import LongButton from "../long_button"


export default function NewTweetModal({height, width, addNewTweet}){
    const [isFocus, setIsFocus] = React.useState(false)
    const handleFocus = () => setIsFocus(true)
    const handleBlur = () => setIsFocus(false)
    const [newTweet, setNewTweet] = React.useState({
        time: null,
        sender: "604a1a90fa54f858582b6ae4",
        name: "Swisher",
        username: "@Swisher",
        content: "",
        likes: 0,
        retweet: 0,
        comments: [],
        comments: [],
        tags: [],
        mentions: [],
    })

    const editSwish = (e) => {
        console.log(newTweet)
        console.log(e.target.value)
        setNewTweet(prev => {
            prev.content = e.target.value
            return prev
        })
    }

    const swish = () => {
        let time = new Date()
        newTweet.time = time
        console.log(newTweet)
        fetch('/api/tweets', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTweet)
        }).then(res => res.json())
        .then(tweet => {
            // console.log(tweet)
            addNewTweet(tweet)
        })
    }

    return(
        <ModalContainer height={height} width={width} focus={isFocus}>
            <UserPhoto photo={ProfilePicture} />
            {/* <UserPhoto>
                <Photo image={ProfilePicture} />
            </UserPhoto> */}
            <TweetEdittingContainer focus={isFocus}>
                <TopContainer focus={isFocus}>
                    <InputArea placeholder="What's happening?" onFocus={handleFocus} onBlur={handleBlur} onChange={editSwish} />
                    <AccessibilitySettingContainer focus={isFocus}>
                        <AccessibilitySettings>
                            <GiEarthAmerica />
                            Everyone can reply
                        </AccessibilitySettings>
                    </AccessibilitySettingContainer>
                </TopContainer>
                <BottomContainer>
                    <ButtonsGroupContainer>
                        <RoundButtonContainer><IoImageOutline /></RoundButtonContainer>
                        <RoundButtonContainer><RiFileGifLine /></RoundButtonContainer>
                        <RoundButtonContainer><IoStatsChartSharp /></RoundButtonContainer>
                        <RoundButtonContainer><GrEmoji /></RoundButtonContainer>
                        <RoundButtonContainer><BiCalendar /></RoundButtonContainer>
                    </ButtonsGroupContainer>
                    <LongButton width="80px" label="Tweet" onClick={swish} />
                </BottomContainer>
            </TweetEdittingContainer>
        </ModalContainer>
    )
}