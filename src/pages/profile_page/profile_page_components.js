import styled from "styled-components"

export const UserProfileContainer = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 93vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const UpperContainer = styled.div`
    width: 100%;
    height: 50%;
    background: url(${props => props.backgroundImage});
    background-size: cover;
    background-color: #1DA1F2;
`

export const LowerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px;
`

export const UserPhoto = styled.div`
    position: absolute;
    top: 50%;
    margin-top: -70px;
    margin-left: 30px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 5px solid white;
    background: url(${props => props.image});
    background-size: cover;
`

export const DateJoined = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    color: #5B7083;
    font-size: 16px;
    width: 170px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const FollowStatus = styled.div`
    width: auto;
    color: #5B7083;

`

export const EditProfileButton = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 120px;
    height: 40px;
    border-radius: 50px;
    border: 2px solid #1DA1F2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #1DA1F2;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background-color: #1DA1F2;
        color: white;
    }
`

export const UserName = styled.div`
    font-size: 20px;
    font-weight: bold;
`