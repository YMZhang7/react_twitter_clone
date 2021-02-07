import styled from "styled-components"

export const ModalContainer = styled.div`
    min-height: ${props => props.height ? "" : "100px"};
    height: ${props => props.height ? props.height : ""};
    width: ${props => props.width};
    background-color: ${props => props.focus ? "white" : "transparent"};
    border-radius: ${props => props.focus ? "20px" : "0px"};
    box-shadow: ${props => props.focus ? "2px 2px 5px rgba(0,0,0,0.1)" : "0px"};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
    padding: 15px;
    position: relative;
`

// export const UserPhoto = styled.div`
//     width: 50px;
//     height: 100%;
//     display: flex;
//     margin-right: 10px;
//     flex-direction: column;
//     justify-content: start;
//     align-items: center;
//     cursor: pointer;
// `

// export const Photo = styled.div`
//     width: 50px;
//     height: 50px;
//     border-radius: 50px;
//     background: url(${props => props.image});
//     background-size: cover;
// `

export const TweetEdittingContainer = styled.div`
    width: 90%;
    height: 100%;
    padding: 5px;
`

export const TopContainer = styled.div`
    width: 100%;
    height: 60%;
    padding: 5px;
    border-bottom: ${props => props.focus ? "1px solid #E5E5E5" : "none"};
    display: flex;
    flex-direction: column;
`

export const BottomContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

export const InputArea = styled.textarea`
    border: none;
    outline: none;
    width: 100%;
    height: 70%;
    resize: none;
    font-family: apple-system, system-ui, segoe;
    font-size: 20px;
    background: transparent;
    ::placeholder{
        font-weight: 400;
    }
`

export const AccessibilitySettingContainer = styled.div`
    display: ${props => props.focus ? "flex" : "none"};
    width: 100%;
    height: 10%;
    /* background-color: green; */
`

export const AccessibilitySettings = styled.div`
    width: 180px;
    height: 30px;
    border-radius: 50px;
    color: #1DA1F2;
    font-size: 15px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

export const ButtonsGroupContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const RoundButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    font-size: 25px;
    color: #1DA1F2;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`