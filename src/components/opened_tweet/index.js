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
import ReplyComponent from "../reply_component"

export default function OpenedTweet({tweet, closeTweet}){
    const closeOpenTweet = () => {
        closeTweet()
    }

    const TweetWindowClicked = (e) => {
        e.stopPropagation() // avoid closeOpenTweet being called
    }

    let tweetTime = tweet && new Date(tweet.time)
    let time = tweet && tweetTime.getFullYear() + '/' + (parseInt(tweetTime.getMonth()) + 1).toString() + '/' + tweetTime.getDate()

    const [commentComponents, setCommentComponents] = React.useState(<div style={{position: "relative", top: "50px"}}>There is no comment to show yet.</div>)
    React.useEffect(() => {
        if (tweet){
            if (tweet.comments.length > 0){
                console.log('hhhh')
                fetch('/api/tweets', {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        getComments: true,
                        comments: tweet.comments,
                    })
                }).then(res => res.json())
                .then(comments => {
                    console.log(comments.comments)
                    const cComponents = comments.comments.map(tweet => <TweetBox key={tweet._id} tweet={tweet} />)
                    setCommentComponents(cComponents)
                }).catch(err => {
                    console.log("Error: " + err)
                })
            } else {
                setCommentComponents(<div style={{position: "relative", top: "50px"}}>There is no comment to show yet.</div>)
            }
            
        }
    }, [tweet])

    const [commentingMode, setCommentingMode] = React.useState(false)
    const closeCommentingMode = () => setCommentingMode(false)

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
                    <IconContainer hoverColor="#1DA1F2" onClick={() => setCommentingMode(true)}><BsChat /></IconContainer>
                    <IconContainer hoverColor="#5DBA09"><AiOutlineRetweet /></IconContainer>
                    <IconContainer hoverColor="#E13E70"><AiOutlineHeart /></IconContainer>
                    <IconContainer hoverColor="#1DA1F2"><FiShare /></IconContainer>
                </TweetActionsBar>
                <TweetCommentsContainer>
                    {commentingMode ? <ReplyComponent close={closeCommentingMode} /> : commentComponents}
                </TweetCommentsContainer>
            </TweetWindow>
        </BackgroundScreen>
    )
}