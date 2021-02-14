import React from "react"
import { Link, } from "react-router-dom";
import { 
    LeftSidebarContainer, 
    NavigationContainer, 
    SidebarItemContainer, 
    TextLabel, 
    TwitterIconContainer, 
    TwitterIcon, 
    IconContainer,
} from "./left_sidebar_components"
import { RiBookmarkLine, RiBookmarkFill, RiTwitterFill, RiFileList2Line, RiFileList2Fill } from "react-icons/ri"
import { FiHash } from "react-icons/fi"
import { AiOutlineHome, AiFillHome, AiOutlineMail, AiTwotoneMail } from "react-icons/ai"
import { BsBell, BsBellFill, BsPerson, BsFillPersonFill } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import LongButton from "../long_button"
import CurrentUserPanel from "./components/current_user_panel"
import PopupList from "../popup_list";


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
]

export default function LeftSidebar(){
    const [focus, setFocus] = React.useState('Home')
    const [popupShow, setPopupShow] = React.useState(false)

    const handlePopupShow = () => setPopupShow(true)
    const handlePopupClose = () => setPopupShow(false)

    function handleClick (text){
        if (text == "More"){
            // handlePopupShow()
            console.log(window.innerWidth)
        } else {
            setFocus(text)
        }
    }

    const SidebarItems = () => sidebarElements.map((item) => 
        <Link to={'/' + item.text.toLowerCase()} style={{ textDecoration: 'none' }} key={item.text}>
            <SidebarItemContainer onClick={() => handleClick(item.text)} id={item.text} focus={focus === item.text}>
                <IconContainer focused={focus === item.text}>{focus === item.text ? item.iconFill : item.iconLine}</IconContainer>
                <TextLabel style={{color: focus === item.text ? "#1DA1F2" : "#0f1419"}}>{item.text}</TextLabel>
            </SidebarItemContainer>
        </Link>
    )

    

    return (
        <LeftSidebarContainer>
            <PopupList show={popupShow} handleClose={handlePopupClose}  />
            <TwitterIconContainer>
                <TwitterIcon>
                    <RiTwitterFill />
                </TwitterIcon>
            </TwitterIconContainer>
            <NavigationContainer>
                {SidebarItems()}
                <SidebarItemContainer onClick={() => handleClick("More")}>
                    <IconContainer focused={focus === "More"}><CgMoreO /></IconContainer>
                    <TextLabel onClick={handlePopupShow}><span style={{verticalAlign: "10px", color: focus === "More" ? "#1DA1F2" : "#0f1419"}}>More</span></TextLabel>
                </SidebarItemContainer>
            </NavigationContainer>
            <LongButton width="90%" label="Tweet" />
            <CurrentUserPanel />
        </LeftSidebarContainer>
    )
}