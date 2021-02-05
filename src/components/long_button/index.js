import React from "react"
import styled from "styled-components"

export default function LongButton(props){
    return (
        <ButtonContainer width={props.width}>{props.label}</ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    width: ${(props) => props.width}; 
    height: 40px; 
    border-radius: 50px;
    border: none;
    outline: none;
    background: linear-gradient(to bottom right, #4ab4f5 0%, #1da1f2 100%);
    color: white;
    font-weight: bold;
    font-size: 15px;
    box-shadow: 2px 2px 15px rgba(0,0,0,0.3);
    cursor: pointer;
    &:hover{
        background: #0b7bc1;
    }
`