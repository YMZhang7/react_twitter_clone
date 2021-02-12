import styled from "styled-components"
import { FiMoreHorizontal } from "react-icons/fi"
import { RiPlayListAddLine } from "react-icons/ri"


export const ButtonGroup = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    font-size: 20px;
    position: relative;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

export const MoreButton = () => <ButtonContainer><FiMoreHorizontal /></ButtonContainer>
export const NewListbutton = () => <ButtonContainer><RiPlayListAddLine /></ButtonContainer>

export const BodyContainer = styled.div`
    width: 100%;
    height: 93vh;
    overflow-y: scroll;
`

export const ContentContainer = styled.div`
    width: 98%;
    height: auto;
    border-radius: 20px;
    background-color: rgba(255,255,255,0.8);
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`
export const ContentTitle = styled.div`
    width: 100%;
    height: 40px;
    padding-left: 15px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const ContentBody = styled.div`
    width: 100%;
    min-height: 120px;
    /* background-color:lavender; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`