import styled from "styled-components"

export const TitleBar = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
`

export const Divider = styled.div`
    height: 5px;
    width: 100%;
    background-color: #EDEDED;
`

export const TweetsContainer = styled.div`
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
    padding-bottom: 50px;
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