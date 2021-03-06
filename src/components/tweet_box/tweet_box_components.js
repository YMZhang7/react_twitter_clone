import styled from "styled-components"

export const TweetBoxContainer = styled.div`
    position: relative;
    width: 99%;
    /* border-bottom: 1px solid #E5E5E5; */
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-evenly;
    padding: 15px;
    cursor: pointer;
    background-color: rgba(255,255,255,0.9);
    box-shadow: 3px 3px 8px rgba(0,0,0,0.1);
    border-radius: 20px;
    margin: 10px 0 10px 0;
    &:hover{
        background-color: rgba(230, 226, 227, 0.3);
    }
`

export const ContentContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const HeaderContainer = styled.div`
    height: 25px;
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const BodyContainer = styled.div`
    height: auto;
    width: 100%;
    text-align: start;
    font-size: 15px;
    /* margin-top: 10px; */
`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    height: 30px;
    /* background-color: lightgray; */
    margin-top: 20px;
`

export const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* &:hover{
    } */
`

export const IconButtonContainer = styled.div`
    width: 80px;
    height: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    font-size: 16px;
    color: #5B7083;
    cursor: pointer;
    &:hover{
        color: ${props => props.hoverTextColor}
    }
    &:hover ${IconContainer}{
        background-color: ${props => props.hoverColor}
    }
`

export const ShareIconContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        color: #1DA1F2;
        background-color: rgba(29, 161, 242, 0.1);
    }
`
