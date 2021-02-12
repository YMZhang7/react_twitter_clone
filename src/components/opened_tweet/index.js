import React from "react"
import UserCard from "../user_card"
import {
    BackgroundScreen,
    TweetWindow,
    TweetTopBar,
    TweetSenderContainer,
    TweetBodyContainer,
    TweetInfoContainer,
    TweetStatisticsContainer,
    TweetActionsBar,
    IconContainer,
} from "./opened_tweet_components"
import { FiMoreHorizontal } from "react-icons/fi"
import { BsChat } from "react-icons/bs"
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai"
import { FiShare } from "react-icons/fi"

export default function OpenedTweet({tweet, closeTweet}){
    const closeOpenTweet = () => {
        closeTweet()
        console.log('close tweet')
    }

    const TweetWindowClicked = (e) => {
        console.log('tweet window clicked')
        e.stopPropagation() // avoid closeOpenTweet being called
    }

    return(
        <BackgroundScreen show={tweet} onClick={closeOpenTweet}>
            <TweetWindow onClick={TweetWindowClicked}>
                <TweetTopBar>Harry Potter liked</TweetTopBar>
                <TweetSenderContainer>
                    <UserCard name={tweet && tweet.name} username={tweet && tweet.username} photo={tweet && tweet.photo} />
                    <FiMoreHorizontal />
                </TweetSenderContainer>
                <TweetBodyContainer>{tweet && tweet.content}</TweetBodyContainer>
                <TweetInfoContainer>5:02 am · 7 Feb 2021·Twitter for iPhone</TweetInfoContainer>
                <TweetStatisticsContainer>
                    {tweet && tweet.retweet}&nbsp;<TweetInfoContainer>Retweet</TweetInfoContainer> 
                    1&nbsp;<TweetInfoContainer>Quote Tweet</TweetInfoContainer>
                    {tweet && tweet.likes}&nbsp;<TweetInfoContainer>Likes</TweetInfoContainer>
                </TweetStatisticsContainer>
                <TweetActionsBar>
                    <IconContainer hoverColor="#1DA1F2"><BsChat /></IconContainer>
                    <IconContainer hoverColor="#5DBA09"><AiOutlineRetweet /></IconContainer>
                    <IconContainer hoverColor="#E13E70"><AiOutlineHeart /></IconContainer>
                    <IconContainer hoverColor="#1DA1F2"><FiShare /></IconContainer>
                </TweetActionsBar>
            </TweetWindow>
        </BackgroundScreen>
    )
}