import React from "react"
import styled from "styled-components"

export default function UserNameText(props){
    return(
        <TextContainer>{props.text}</TextContainer>
    )
}

const TextContainer = styled.div`
    font-size: 15px;
    font-weight: bold;
    width: fit-content;
`