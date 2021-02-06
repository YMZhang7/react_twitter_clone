import styled from "styled-components"

export const TitleBar = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
    position: absolute;
    background-color: white;
    top: 0px;
    /* left: 100px; */
    z-index: 1;
`

export const Divider = styled.div`
    height: 5px;
    width: 100%;
    background-color: #EDEDED;
`

export const TweetsContainer = styled.div`
    /* height: 100%; */
    width: 100%;
    box-shadow: 0px -5px 5px rgba(0,0,0,0.1);
    position: absolute;
    top: 7vh;
    height: 93vh;
    flex-direction: column;
    overflow-y: scroll;
    /* padding-bottom: 50px; */
    /* position: relative;
    top: 50px; */
    
`