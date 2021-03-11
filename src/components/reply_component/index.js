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
} from "./reply_components"
import { AiOutlineClose } from "react-icons/ai"
import { BiCalendar } from "react-icons/bi"
import { GrEmoji } from "react-icons/gr"
import { IoImageOutline, IoStatsChartSharp } from "react-icons/io5"
import { RiFileGifLine } from "react-icons/ri"


export default function ReplyComponent({close}){

    return (
        <ReplyContainer>
            <LeftSide></LeftSide>
            <RightSide>
                <ViewControl>
                    <ButtonContainer onClick={close}><AiOutlineClose fontSize="17px" /></ButtonContainer>
                </ViewControl>
                <InputArea placeholder="Swish your comment" />
                <BottomBar>
                    <SmallButtonGroup>
                        <ButtonContainer><IoImageOutline /></ButtonContainer>
                        <ButtonContainer><RiFileGifLine /></ButtonContainer>
                        <ButtonContainer><IoStatsChartSharp /></ButtonContainer>
                        <ButtonContainer><GrEmoji /></ButtonContainer>
                        <ButtonContainer><BiCalendar /></ButtonContainer>
                    </SmallButtonGroup>
                    <LongButton label="Comment" width="120px" />
                </BottomBar>
            </RightSide>
        </ReplyContainer>
    )
}

