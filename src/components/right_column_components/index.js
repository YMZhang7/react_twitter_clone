import styled from "styled-components"

export const RightColumnContentContainer = styled.div`
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-color: #EFEFEF;
    margin-top: 15px;
`

export const RightColumnContentTitle = styled.div`
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: start;
    vertical-align: center;
    padding: 15px;
    border-bottom: 1px solid #D5D5D5;
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
    width: 100%;
    height: auto;
    padding: 15px;
    border-bottom: 1px solid #D5D5D5;
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