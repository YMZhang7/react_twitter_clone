import styled from "styled-components"
// import {AiOutlineSetting} from "react-icons/ai"

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


export const ContentListContainer = styled.div`
    height: 80%;
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
    text-align: start;
`
export const ImageSubtitle = styled.div`
    color: white;
    font-size: 15px;
    font-weight: 600;
`