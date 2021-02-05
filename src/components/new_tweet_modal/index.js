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


export default function NewTweetModal({height, width}){
    const [isFocus, setIsFocus] = React.useState(false)
    const handleFocus = () => setIsFocus(true)

    return(
        <ModalContainer height={height} width={width}>
            <UserPhoto photo={ProfilePicture} />
            {/* <UserPhoto>
                <Photo image={ProfilePicture} />
            </UserPhoto> */}
            <TweetEdittingContainer focus={isFocus}>
                <TopContainer focus={isFocus}>
                    <InputArea placeholder="What's happening?" onFocus={handleFocus} />
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
                    <LongButton width="80px" label="Tweet" />
                </BottomContainer>
            </TweetEdittingContainer>
        </ModalContainer>
    )
}