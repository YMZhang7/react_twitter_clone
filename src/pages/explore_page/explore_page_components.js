import styled from "styled-components"
import {AiOutlineSetting} from "react-icons/ai"

export const TopbarContainer = styled.div`
    width: 100%;
    height: auto;
`

export const TopSearchBarContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
`
export const SettingsIcon = styled(AiOutlineSetting)`
    width: 25px;
    height: 25px;
    color: #1DA1F2;
`
export const IconContainer = styled.div`
    width: 40px;
    height: 40px;  
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

export const ContentListContainer = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    /* background-color: lightcoral; */
    overflow-y: scroll;
`

export const ImageNews = styled.div`
    width: 100%;
    height: 400px;
    background: url(${props => props.image});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 10px;
`

export const ImageTitle = styled.div`
    color: white;
    font-weight: bold;
    font-size: 25px;
    margin: 5px;
`
export const ImageSubtitle = styled.div`
    color: white;
    font-size: 15px;
    font-weight: 600;
`

export const WhatsHappeningMoreButton = styled.div`
    width: 40px;
    height: 40px;
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`