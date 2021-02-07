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
    width: 50%;
    height: 90%;
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
    background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`