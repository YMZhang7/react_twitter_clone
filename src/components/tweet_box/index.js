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
import UserNameText from "../user_name_text"
import UserAtText from "../user_at_text"
import MoreButton from "../more_button"

/*
  To-Do:
    * Fix the time
*/

export default function TweetBox({ tweet }){
    let time = Math.round((new Date() - tweet.timestamp) / 1000).toString() + 'h'
    return (
        <TweetBoxContainer>
            <MoreButton />
            <UserPhoto photo={tweet.photo} />
            <ContentContainer>
                <HeaderContainer>
                    <UserNameText text={tweet.name} />
                    <div style={{width: "5px", height: "100%"}}></div>
                    <UserAtText text={tweet.username + " · " + time} />
                </HeaderContainer>
                <BodyContainer>
                    {tweet.content}
                </BodyContainer>
                <FooterContainer>
                    <IconButtonContainer  hoverTextColor="#1DA1F2" hoverColor="rgba(29, 161, 242, 0.1)">
                        <IconContainer><BsChat /></IconContainer>
                        <div style={{width: "10px", height: "100%"}}></div>
                        {tweet.comments}
                    </IconButtonContainer>
                    <IconButtonContainer hoverTextColor="#5DBA09" hoverColor="rgba(114, 225, 14, 0.1)">
                        <IconContainer><AiOutlineRetweet /></IconContainer>
                        <div style={{width: "10px", height: "100%"}}></div>
                        {tweet.retweet}
                    </IconButtonContainer>
                    <IconButtonContainer hoverTextColor="#E13E70" hoverColor="rgba(225, 62, 112, 0.1)">
                        <IconContainer><AiOutlineHeart /></IconContainer>
                        <div style={{width: "10px", height: "100%"}}></div>
                        {tweet.likes}
                    </IconButtonContainer>
                    <IconButtonContainer>
                        <ShareIconContainer><FiShare /></ShareIconContainer>
                    </IconButtonContainer>
                </FooterContainer>
            </ContentContainer>
        </TweetBoxContainer>
    )
}