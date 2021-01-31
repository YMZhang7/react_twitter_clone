import React from "react"
import styled from "styled-components"

export default function LongButton(props){
    return (
        <ButtonContainer width={props.width}>{props.label}</ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    width: ${(props) => props.width}; 
    height: 50px; 
    border-radius: 50px;
    border: none;
    outline: none;
    background-color: #1DA1F2;
    color: white;
    font-weight: bold;
    font-size: 15px;
    box-shadow: 2px 2px 15px rgba(0,0,0,0.1);
    &:hover{
        background-color: #0b7bc1;
    }
`