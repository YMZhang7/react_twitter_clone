import React from "react"
import styled from "styled-components"
import UserAtText from "../user_at_text"
import UserNameText from "../user_name_text"

export default function UserCard({photo, name, username}){
    return(
        <UserCardContainer>
            <Photo image={photo} />
            <NamesContainer>
                <UserNameText text={name} />
                <UserAtText text={username} />
            </NamesContainer>
        </UserCardContainer>
    )
}

const UserCardContainer = styled.div`
    width: 200px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const Photo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: url(${props => props.image});
    background-size: cover;
`

const NamesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
`