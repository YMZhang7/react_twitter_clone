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
    TweetCommentsContainer,
    CloseButtonContainer,
} from "./opened_tweet_components"
import { FiMoreHorizontal } from "react-icons/fi"
import { BsChat } from "react-icons/bs"
import { AiOutlineRetweet, AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { FiShare } from "react-icons/fi"
import TweetBox from "../tweet_box"

export default function OpenedTweet({tweet, closeTweet}){
    const closeOpenTweet = () => {
        closeTweet()
        console.log('close tweet')
    }

    const TweetWindowClicked = (e) => {
        console.log('tweet window clicked')
        e.stopPropagation() // avoid closeOpenTweet being called
    }

    let time = tweet && tweet.timestamp.getFullYear() + '/' + (parseInt(tweet.timestamp.getMonth()) + 1).toString() + '/' + tweet.timestamp.getDate()

    return(
        <BackgroundScreen show={tweet} onClick={closeOpenTweet}>
            <TweetWindow onClick={TweetWindowClicked}>
                <CloseButtonContainer onClick={closeOpenTweet}><AiOutlineClose /></CloseButtonContainer>
                <TweetTopBar>Harry Potter liked</TweetTopBar>
                <TweetSenderContainer>
                    <UserCard name={tweet && tweet.name} username={tweet && tweet.username} photo={tweet && tweet.photo} />
                    <FiMoreHorizontal />
                </TweetSenderContainer>
                <TweetBodyContainer>{tweet && tweet.content}</TweetBodyContainer>
                <TweetInfoContainer>{time + " · Twitter for iPhone"}</TweetInfoContainer>
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
                <TweetCommentsContainer>
                    {tweet && (tweet.comments.length === 0) && <div style={{position: "relative", top: "50px"}}>There is no comment to show yet.</div>}
                    {tweet && (tweet.comments.length > 0 && <TweetBox tweet={tweet.comments[0]} />)}
                </TweetCommentsContainer>
            </TweetWindow>
        </BackgroundScreen>
    )
}