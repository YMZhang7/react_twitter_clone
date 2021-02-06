import React from "react"
import styled from "styled-components"
import { AiOutlineSetting } from "react-icons/ai"

export default function SettingsButton(){
    return (
        <IconContainer>
            <SettingsIcon />
        </IconContainer>
    )
}

const SettingsIcon = styled(AiOutlineSetting)`
    width: 25px;
    height: 25px;
    color: #1DA1F2;
`
const IconContainer = styled.div`
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