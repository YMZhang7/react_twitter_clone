import React from "react"
import styled from "styled-components"

export default function UserAtText(props){
    return(
        <TextContainer>{props.text}</TextContainer>
    )
}

const TextContainer = styled.div`
    font-size: 15px;
    /* font-weight: lighter; */
    color: #5B7083;
    width: fit-content;
`