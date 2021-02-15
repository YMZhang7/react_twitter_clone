import React from "react"
import { useLocation } from "react-router-dom"
import { Link, } from "react-router-dom";
import { 
    LeftSidebarContainer, 
    NavigationContainer, 
    SidebarItemContainer, 
    TextLabel, 
    TwitterIconContainer, 
    TwitterIcon, 
    IconContainer,
    ShrinkedContainer,
    SmallTweetButton,
    Photo,
} from "./left_sidebar_components"
import { RiBookmarkLine, RiBookmarkFill, RiTwitterFill, RiFileList2Line, RiFileList2Fill } from "react-icons/ri"
import { FiHash } from "react-icons/fi"
import { AiOutlineHome, AiFillHome, AiOutlineMail, AiTwotoneMail } from "react-icons/ai"
import { BsBell, BsBellFill, BsPerson, BsFillPersonFill } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import LongButton from "../long_button"
import CurrentUserPanel from "./components/current_user_panel"
import PopupList from "../popup_list";
import ProfilePicture from "../../images/profile_picture.jpg"


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
    const [popupLeft, setPopupLeft] = React.useState(0)
    const [popupBottom, setPopupBottom] = React.useState(0)
    const [shrink, setShrink] = React.useState(window.innerWidth < 1250)

    const handlePopupShow = () => setPopupShow(true)
    const handlePopupClose = () => setPopupShow(false)
    let location = useLocation()

    React.useEffect(() => {
        let name = location.pathname[1].toUpperCase() + location.pathname.substring(2)
        console.log(name)
        setFocus(name)
    }, [location.pathname])

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1250){
            setShrink(false)
        } else {
            setShrink(true)
        }
    })

    function handleClick (e, text){
        if (text === "More"){
            setPopupLeft(e.target.getBoundingClientRect().left)
            setPopupBottom(window.innerHeight - e.target.getBoundingClientRect().bottom)
            handlePopupShow()
        } else {
            setFocus(text)
        }
    }

    function preventClick(e){
        console.log('child clicked')
        e.stopPropagation()
    }

    const SidebarItems = () => sidebarElements.map((item) => 
        <Link to={'/' + item.text.toLowerCase()} style={{ textDecoration: 'none' }} key={item.text}>
            <SidebarItemContainer onClick={(e) => handleClick(e, item.text)} id={item.text} focus={focus === item.text}>
                <IconContainer focused={focus === item.text} onClick={preventClick}>{focus === item.text ? item.iconFill : item.iconLine}</IconContainer>
                <TextLabel style={{color: focus === item.text ? "#1DA1F2" : "#0f1419"}} onClick={preventClick}>{item.text}</TextLabel>
            </SidebarItemContainer>
        </Link>
    )

    const ShrinkedItems = sidebarElements.map(item => 
        <Link to={'/' + item.text.toLowerCase()} style={{ textDecoration: 'none' }} key={item.text}>
            <ShrinkedContainer onClick={(e) => handleClick(e, item.text)} id={item.text}>
                <IconContainer focused={focus === item.text} onClick={preventClick}>{focus === item.text ? item.iconFill : item.iconLine}</IconContainer>
            </ShrinkedContainer>
        </Link>
    )    

    return (
        <LeftSidebarContainer shrink={shrink}>
            <PopupList show={popupShow} handleClose={handlePopupClose} left={popupLeft} bottom={popupBottom}  />
            <TwitterIconContainer>
                <TwitterIcon>
                    <RiTwitterFill />
                </TwitterIcon>
            </TwitterIconContainer>
            <NavigationContainer shrink={shrink}>
                {shrink ? ShrinkedItems : SidebarItems()}
                {shrink ? 
                    <ShrinkedContainer onClick={(e) => handleClick(e, "More")}>
                        <IconContainer focused={focus === "More"}><CgMoreO /></IconContainer>
                    </ShrinkedContainer> 
                    : 
                    <SidebarItemContainer onClick={(e) => handleClick(e, "More")}>
                        <IconContainer focused={focus === "More"}><CgMoreO /></IconContainer>
                        <TextLabel onClick={handlePopupShow}><span style={{verticalAlign: "10px", color: focus === "More" ? "#1DA1F2" : "#0f1419"}}>More</span></TextLabel>
                    </SidebarItemContainer>
                }
            </NavigationContainer>
            {shrink ? <SmallTweetButton /> : <LongButton width="90%" label="Tweet" />}
            {shrink ? <Photo image={ProfilePicture} /> : <CurrentUserPanel />}
        </LeftSidebarContainer>
    )
}