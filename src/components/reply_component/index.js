import React from "react"
import LongButton from "../long_button"
import {
    ReplyContainer,
    LeftSide,
    RightSide,
    InputArea,
    BottomBar,
    SmallButtonGroup,
    ButtonContainer,
    ViewControl,
    Photo
} from "./reply_components"
import { AiOutlineClose } from "react-icons/ai"
import { BiCalendar } from "react-icons/bi"
import { GrEmoji } from "react-icons/gr"
import { IoImageOutline, IoStatsChartSharp } from "react-icons/io5"
import { RiFileGifLine } from "react-icons/ri"
import ProfilePicture from "../../images/profile_picture.jpg"

export default function ReplyComponent({close, replyTo, reply}){
    const [replyContent, setReplyContent] = React.useState({
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
        replyTo: replyTo,
    })

    const editSwish = (e) => {
        console.log(e.target.value)
        console.log(replyTo)
        setReplyContent(prev => {
            prev.content = e.target.value
            return prev
        })
    }

    const swish = () => {
        let time = new Date()
        replyContent.time = time
        console.log(replyContent)
        fetch('/api/tweets/reply', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(replyContent)
        }).then(res => res.json())
        .then(tweet => {
            console.log(tweet)
            reply(tweet)
        })
    }

    return (
        <ReplyContainer>
            <LeftSide>
                <Photo image={ProfilePicture} />
            </LeftSide>
            <RightSide>
                <ViewControl>
                    <ButtonContainer onClick={close}><AiOutlineClose fontSize="17px" /></ButtonContainer>
                </ViewControl>
                <InputArea placeholder="Swish your comment" onChange={editSwish} />
                <BottomBar>
                    <SmallButtonGroup>
                        <ButtonContainer><IoImageOutline /></ButtonContainer>
                        <ButtonContainer><RiFileGifLine /></ButtonContainer>
                        <ButtonContainer><IoStatsChartSharp /></ButtonContainer>
                        <ButtonContainer><GrEmoji /></ButtonContainer>
                        <ButtonContainer><BiCalendar /></ButtonContainer>
                    </SmallButtonGroup>
                    <LongButton label="Comment" width="120px" onClick={swish} />
                </BottomBar>
            </RightSide>
        </ReplyContainer>
    )
}

