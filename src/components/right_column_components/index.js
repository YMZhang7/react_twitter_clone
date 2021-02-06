import styled from "styled-components"
import React from "react"
// import LongButton from "../long_button"

export const RightColumnContentContainer = styled.div`
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-color: rgba(242, 242, 242, 0.9);
    margin-top: 15px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
`

export const RightColumnContentTitle = styled.div`
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: start;
    vertical-align: center;
    padding: 15px;
    border-bottom: 1px solid #E5E5E5;
`

export const ShowMoreButton = styled.div`
    height: 50px;
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: #1DA1F2;
    font-size: 15px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 15px;
    &:hover{
        background-color: #DFDFDF;
    }
`

export const WhatsHappeningEntryContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: 15px;
    border-bottom: 1px solid #E5E5E5;
    cursor: pointer;
    &:hover{
        background-color: #DFDFDF;
    }
`

export const EntryHeader = styled.div`
    color: #5B7083;
    font-size: 13px;
    text-align: start;
`

export const EntryBody = styled.div`
    font-size: 15px;
    font-weight: bold;
    text-align: start;
    margin-top: 5px;
    margin-bottom: 5px;
`

export const EntryFooter = styled.div`
    color: #5B7083;
    font-size: 13px;
    text-align: start;
`

export const AcknowledgementContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    color: #5B7083;
    font-size: 13px;
    text-align: start;
    line-height: 1.5; 
    padding: 5px;
`

export function UserRecommendation ({image, name, username}){
    return (
        <UserRecommendationContainer>
            <Photo image={image} />
            <UserInfoContainer>
                <NameContainer>{name}</NameContainer>
                <UsernameContainer>{username}</UsernameContainer>
            </UserInfoContainer>
            <FollowButton>Follow</FollowButton>
            {/* <LongButton label="Follow" width="70px" /> */}
        </UserRecommendationContainer>
    )
}

const UserRecommendationContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
`

const Photo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: url(${props => props.image});
    background-size: cover;
`

const UserInfoContainer = styled.div`
    height: 100%;
    width: 40%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const NameContainer = styled.div`
    width: 100%;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    text-align: start;
`

const UsernameContainer = styled.div`
    width: 100%;
    color: #5B7083;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    text-align: start;
`

const FollowButton = styled.div`
    width: 70px;
    height: 30px;
    border-radius: 50px;
    border: 2px solid #1DA1F2;
    color: #1DA1F2;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        /* background-color: rgba(29, 161, 242, 0.1); */
        color: white;
        border: none;
        background: linear-gradient(to bottom right, #4ab4f5 0%, #1da1f2 100%);
    }
`