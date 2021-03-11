import styled from "styled-components"

export const BackgroundScreen = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.2);
    z-index: 1;
    display: ${props => props.show == null ? "none" : "flex"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TweetWindow = styled.div`
    position: relative;
    width: 40%;
    max-height: 90%;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`

export const TweetTopBar = styled.div`
    height: 50px;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-style: italic;
`

export const TweetSenderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`

export const TweetBodyContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: start;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
`

export const TweetInfoContainer = styled.div`
    width: 100%;
    height: auto;
    text-align: start;
    font-size: 15px;
    color: #5B7083;
    font-weight: normal;
`

export const TweetStatisticsContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    margin: 20px;
`

export const TweetActionsBar = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    /* background-color: rgba(29, 161, 242, 0.1); */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.1);
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    cursor: pointer;
    font-size: 20px;
    margin-right: 30px;
    &:hover{
        background-color: ${props => props.hoverColor};
    }
`

export const TweetCommentsContainer = styled.div`
    width: 100%;
    height: 300px;
    overflow-y: scroll;
`

export const CloseButtonContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`