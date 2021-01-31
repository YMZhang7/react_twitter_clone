import React from "react"
import { LeftSidebarContainer, NavigationContainer, SidebarItemContainer, TextLabel, TwitterIconContainer, TwitterIcon, IconContainer } from "./left_sidebar_components"
import { RiBookmarkLine, RiBookmarkFill, RiTwitterFill, RiFileList2Line, RiFileList2Fill } from "react-icons/ri"
import { FiHash } from "react-icons/fi"
import { AiOutlineHome, AiFillHome, AiOutlineMail, AiTwotoneMail } from "react-icons/ai"
import { BsBell, BsBellFill, BsPerson, BsFillPersonFill } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import LongButton from "../long_button"
import CurrentUserPanel from "./components/current_user_panel"


// [] wrap the components with <a></a>

const sidebarElements = [
    {
        text: 'Home',
        iconLine: <AiOutlineHome />,
        iconFill: <AiFillHome />,
        link: ''
    },
    {
        text: 'Explore',
        iconLine: <FiHash />,
        iconFill: <FiHash />,
        link: ''
    },
    {
        text: 'Notifications',
        iconLine: <BsBell />,
        iconFill: <BsBellFill />,
        link: ''
    },
    {
        text: 'Messages',
        iconLine: <AiOutlineMail />,
        iconFill: <AiTwotoneMail />,
        link: ''
    },
    {
        text: 'Bookmarks',
        iconLine: <RiBookmarkLine />,
        iconFill: <RiBookmarkFill />,
        link: ''
    },
    {
        text: 'Lists',
        iconLine: <RiFileList2Line />,
        iconFill: <RiFileList2Fill />,
        link: ''
    },
    {
        text: 'Profile',
        iconLine: <BsPerson />,
        iconFill: <BsFillPersonFill />,
        link: ''
    },
    {
        text: 'More',
        iconLine: <CgMoreO />,
        iconFill: <CgMoreO />,
        link: ''
    },
]

export default function LeftSidebar(){
    const [focus, setFocus] = React.useState('Home')

    function handleClick (text){
        setFocus(text)
    }

    const SidebarItems = () => sidebarElements.map((item) => 
        <SidebarItemContainer key={item.text} onClick={() => handleClick(item.text)} id={item.text}>
            <IconContainer focused={focus === item.text}>{focus === item.text ? item.iconFill : item.iconLine}</IconContainer>
            <TextLabel><span style={{verticalAlign: "10px", color: focus === item.text ? "#1DA1F2" : "#0f1419"}}>{item.text}</span></TextLabel>
        </SidebarItemContainer>
    )

    return (
        <LeftSidebarContainer>
            <TwitterIconContainer>
                <TwitterIcon>
                    <RiTwitterFill />
                </TwitterIcon>
            </TwitterIconContainer>
            <NavigationContainer>
                {SidebarItems()}
            </NavigationContainer>
            <LongButton width="90%" label="Tweet" />
            <CurrentUserPanel />
        </LeftSidebarContainer>
    )
}