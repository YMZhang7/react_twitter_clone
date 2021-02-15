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


export default function TweetBox({ tweet, onClick }){
    let time = tweet.timestamp.getFullYear() + '/' + (parseInt(tweet.timestamp.getMonth()) + 1).toString() + '/' + tweet.timestamp.getDate()

    function preventClick(e){
        console.log('child clicked')
        e.stopPropagation()
    }

    return (
        <TweetBoxContainer onClick={onClick}>
            <MoreButton onClick={preventClick} />
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
                    <IconButtonContainer  hoverTextColor="#1DA1F2" hoverColor="rgba(29, 161, 242, 0.1)" onClick={preventClick}>
                        <IconContainer><BsChat /></IconContainer>
                        <div style={{width: "10px", height: "100%"}}></div>
                        {tweet.comments.length}
                    </IconButtonContainer>
                    <IconButtonContainer hoverTextColor="#5DBA09" hoverColor="rgba(114, 225, 14, 0.1)" onClick={preventClick}>
                        <IconContainer><AiOutlineRetweet /></IconContainer>
                        <div style={{width: "10px", height: "100%"}}></div>
                        {tweet.retweet}
                    </IconButtonContainer>
                    <IconButtonContainer hoverTextColor="#E13E70" hoverColor="rgba(225, 62, 112, 0.1)" onClick={preventClick}>
                        <IconContainer><AiOutlineHeart /></IconContainer>
                        <div style={{width: "10px", height: "100%"}}></div>
                        {tweet.likes}
                    </IconButtonContainer>
                    <IconButtonContainer onClick={preventClick}>
                        <ShareIconContainer><FiShare /></ShareIconContainer>
                    </IconButtonContainer>
                </FooterContainer>
            </ContentContainer>
        </TweetBoxContainer>
    )
}