import React from "react"
import {
    MiddlePartContainer,
    PageContainer, 
    RightPartContainer,

} from "../../components/page_partition"
import Searchbar from "../../components/search_bar"
import {
    Titlebar,
} from "../notification_page/notification_page_components"
import { BiMessageAdd } from "react-icons/bi"
import {
    SearchbarContainer,
    PeopleContainer,
    PeopleCardsContainer,
    Photo,
    NameContainer,
    TitlebarNameContainer,
    ChatControlContainer,
    IconContainer,
    MessageInputArea,
    InputComponent,

} from "./messages_page_components"
import FemaleProfile from "../../images/female_profile.jpg"
import MaleProfile from "../../images/male_profile.jpg"
// import { GrUserManager } from "react-icons/gr"
import UserAtText from "../../components/user_at_text"
import { AiOutlineInfoCircle, AiOutlineSend } from "react-icons/ai"
import { IoImageOutline } from "react-icons/io5"
import { RiFileGifLine } from "react-icons/ri"
import { GrEmoji } from "react-icons/gr"


export default function MessagesPage(){
    const contacts = [
        {
            id: 1,
            image: FemaleProfile,
            name: "Hermione Granger",
            username: "@Hermione Granger",
        },
        {
            id: 2,
            image: MaleProfile,
            name: "Harry Potter",
            username: "@Harry Potter",
        },
    ]

    const [activeChat, setActiveChat] = React.useState(contacts[0])
    const handleClick = (chat) => {
        setActiveChat(chat)
    }

    const contactComponents = contacts.map((contact) => 
        <PeopleCardsContainer key={contact.id} id={contact.id} onClick={() => handleClick(contact)} focus={activeChat.id === contact.id}>
            <Photo image={contact.image} />
            <NameContainer><b>{contact.name}</b> {contact.username}</NameContainer>
        </PeopleCardsContainer>
    )

    return(
        <PageContainer>
            <RightPartContainer style={{ padding: "0px"}}>
                <Titlebar style={{borderBottom: "1px solid #E5E5E5"}}>
                    Messages
                    <IconContainer><BiMessageAdd /></IconContainer>
                </Titlebar>
                <SearchbarContainer><Searchbar /></SearchbarContainer>
                <PeopleContainer>
                    {contactComponents}
                </PeopleContainer>
            </RightPartContainer>
            <MiddlePartContainer>
                <Titlebar style={{padding: "20px"}}>
                    <TitlebarNameContainer style={{fontWeight: "normal"}}>
                        <Photo image={activeChat.image} style={{width: "40px", height: "40px"}} />
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            marginLeft: "10px"
                        }}>
                            <b>{activeChat.name}</b>
                            <UserAtText text={activeChat.username} />
                        </div>
                    </TitlebarNameContainer>
                    <IconContainer><AiOutlineInfoCircle /></IconContainer>
                </Titlebar>
                <ChatControlContainer>
                    <IconContainer><IoImageOutline /></IconContainer>
                    <IconContainer><RiFileGifLine /></IconContainer>
                    <MessageInputArea>
                        <InputComponent type="text" placeholder="Start a new message" />
                        <IconContainer><GrEmoji /></IconContainer>
                    </MessageInputArea>
                    <IconContainer><AiOutlineSend /></IconContainer>
                </ChatControlContainer>
            </MiddlePartContainer>
        </PageContainer>
    )
}