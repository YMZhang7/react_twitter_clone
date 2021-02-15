import React from "react"
import styled from "styled-components"
import { RiUserReceivedLine, RiChat1Line, RiAdvertisementLine, RiBarChartLine, RiSettings4Line, RiQuestionLine, RiBrushLine} from "react-icons/ri"
import { BsLightning } from "react-icons/bs"
import { IoNewspaperOutline, IoAccessibilitySharp } from "react-icons/io5"

const listItems = [
    {
        text: "Follower requests",
        icon: <RiUserReceivedLine />,
    },
    {
        text: "Topics",
        icon: <RiChat1Line />
    },
    {
        text: "Moments",
        icon: <BsLightning />
    },
    {
        text: "Newsletters",
        icon: <IoNewspaperOutline />
    },
    {
        text: "Twitter Ads",
        icon: <RiAdvertisementLine />
    },
    {
        text: "Analytics",
        icon: <RiBarChartLine />
    },
    {
        text: "Settings and privacy",
        icon: <RiSettings4Line />
    },
    {
        text: "Help Center",
        icon: <RiQuestionLine />
    },
    {
        text: "Display",
        icon: <RiBrushLine />
    },
    {
        text: "Accessibility",
        icon: <IoAccessibilitySharp />
    }
]

export default function PopupList({ show, handleClose, left, bottom}){

    const handleClick = (e) => {
        console.log('more clicked')
        e.stopPropagation()
    }

    const ListItems = listItems.map(item => 
        <PopupListItem key={item.text} onClick={handleClick}> 
            {item.icon}
            &nbsp;&nbsp;&nbsp;{item.text}
        </PopupListItem>
    )
    const height = window.innerHeight - bottom > 500 ? 500 : (window.innerHeight - bottom)
    return (
        <BackgroundContainer show={show} onClick={handleClose}>
            <PopupContainer left={left} bottom={bottom} height={height}>
                {ListItems}
            </PopupContainer>
        </BackgroundContainer>
    )
}

const BackgroundContainer = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    display: ${props => props.show ? "flex" : "none"};
    background-color: transparent;
`

const PopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: ${props => props.bottom + "px"};
    left: ${props => props.left + "px"};
    width: 230px;
    /* height: 500px; */
    height: ${props => props.height + "px"};
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    overflow-y: scroll;
`

const PopupListItem = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    &:hover{
        background-color: rgba(0,0,0,0.1);
    }
`