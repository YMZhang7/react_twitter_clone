import React from "react"
import {
    TweetBoxContainer,
    ContentContainer,
    HeaderContainer,
    BodyContainer,
    FooterContainer,
    IconButtonContainer,
    IconContainer,
    ShareIconContainer
} from "./tweet_box_components"
import { BsChat } from "react-icons/bs"
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai"
import { FiShare } from "react-icons/fi"
import UserPhoto from "../user_photo"
import ProfilePicture from "../../images/profile_picture.jpg"
import UserNameText from "../user_name_text"
import UserAtText from "../user_at_text"


/*
let information = {
    userInfo: {
        name: '',
        userName: '',
        photo: ''
    },
    content: '',
    timestamp: Date object,
    likes: 0,
    retweets: 0,
    replies: []
}

*/

/*
  To-Do:
    * Fix the time
    * Create more button
*/

export default function TweetBox({information}){
    let time = Math.round((new Date() - new Date(2021, 1, 1)) / 1000).toString() + 'h'
    return (
        <TweetBoxContainer>
            <UserPhoto photo={ProfilePicture} />
            <ContentContainer>
                <HeaderContainer>
                    {/* these three needs to be grouped together */}
                    <UserNameText text="Twitter" />
                    <div style={{width: "5px", height: "100%"}}></div>
                    <UserAtText text={"@Twitter · " + time} />
                    {/* TODO: create more button */}
                </HeaderContainer>
                <BodyContainer>
                    This is the first ever twitter that is written in this twitter clone. Happy Birthday!
                    This is the first ever twitter that is written in this twitter clone. Happy Birthday!
                    This is the first ever twitter that is written in this twitter clone. Happy Birthday!
                    This is the first ever twitter that is written in this twitter clone. Happy Birthday!
                    This is the first ever twitter that is written in this twitter clone. Happy Birthday!
                </BodyContainer>
                <FooterContainer>
                    <IconButtonContainer  hoverTextColor="#1DA1F2" hoverColor="rgba(29, 161, 242, 0.1)">
                        <IconContainer><BsChat /></IconContainer>
                        <div style={{width: "10px", height: "100%"}}></div>
                        51
                        {/* replace with actual number */}
                    </IconButtonContainer>
                    <IconButtonContainer hoverTextColor="#5DBA09" hoverColor="rgba(114, 225, 14, 0.1)">
                        <IconContainer><AiOutlineRetweet /></IconContainer>
                        <div style={{width: "10px", height: "100%"}}></div>
                        32
                        {/* replace with actual number */}
                    </IconButtonContainer>
                    <IconButtonContainer hoverTextColor="#E13E70" hoverColor="rgba(225, 62, 112, 0.1)">
                        <IconContainer><AiOutlineHeart /></IconContainer>
                        <div style={{width: "10px", height: "100%"}}></div>
                        100
                        {/* replace with actual number */}
                    </IconButtonContainer>
                    <IconButtonContainer>
                        <ShareIconContainer><FiShare /></ShareIconContainer>
                    </IconButtonContainer>
                </FooterContainer>
            </ContentContainer>
        </TweetBoxContainer>
    )
}