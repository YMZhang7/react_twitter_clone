import styled from "styled-components"

export const HomepageContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    left: 250px;
`

export const HomepageBodyContainer = styled.div`
    width: 65%;
    height: 100%;
    border-left: 1px solid #E5E5E5;
    border-right: 1px solid #E5E5E5;
`

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

export const RightSidebarContainer = styled.div`
    /* background-color: orange; */
    width: 35%;
    height: 100%;
    padding: 5px 20px 5px 20px;
`

// export const SearchContainer = styled.div`
//     width: 100%;
//     height: 40px;
//     background-color: ${props => props.isFocussed ? "white" : "#E5E5E5"};
//     color: ${props => props.isFocussed ? "#1DA1F2" : "#5B7083"};
//     border: ${props => props.isFocussed ? "1px solid #1DA1F2" : ""};
//     border-radius: 50px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//     align-items: center;
// `

// export const SearchArea = styled.input`
//     width: 80%;
//     height: 90%;
//     border: none;
//     outline: none;
//     background-color: transparent;
//     ::placeholder{
//         font-size: 15px;
//         color: #5B7083;
//     }
// `

export const RightsideContentContainer = styled.div`
    width: 100%;
    height: auto;
    border-radius: 20px;
    background-color: #EFEFEF;
    margin-top: 15px;
`

export const RightsideContentTitle = styled.div`
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: start;
    vertical-align: center;
    padding: 15px;
    border-bottom: 1px solid #D5D5D5;
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

export const AcknowledgementContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    color: #5B7083;
    font-size: 13px;
    text-align: start;
    line-height: 1.5; 
    padding: 5px;
`