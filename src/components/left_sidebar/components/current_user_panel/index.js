import React from "react"
import styled from "styled-components"
import { FiMoreHorizontal } from "react-icons/fi"
import UserNameText from "../../../user_name_text"
import UserAtText from "../../../user_at_text"
import ProfilePicture from "../../../../database/profile_picture.jpg"

export default function CurrentUserPanel(props){
    return (
        <PanelContainer>
            <PhotoContainer />
            <NameContainer>
                <UserNameText text="Twitter" />
                <UserAtText text="@Twitter" />
            </NameContainer>
            <MoreIcon />
        </PanelContainer>
    )
}

const PanelContainer = styled.div`
    height: 60px;
    width: 100%;
    border-radius: 50px;
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

const PhotoContainer = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50px;
    background: url(${ProfilePicture});
    background-size: cover;
`

const NameContainer = styled.div`
    height: 40px;
    width: 70px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const MoreIcon = styled(FiMoreHorizontal)`
    position: absolute;
    right: 10px;
    font-size: 20px;
`