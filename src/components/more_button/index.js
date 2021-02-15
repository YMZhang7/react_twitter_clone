import React from "react"
import styled from "styled-components"
import { FiMoreHorizontal } from "react-icons/fi"

export default function MoreButton({onClick}){
    return(
        <ButtonContainer onClick={onClick}>
            <FiMoreHorizontal />
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    font-size: 20px;
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`