import React from "react"
import styled from "styled-components"

export default function UserPhoto({photo}) {
    return (
        <UserPhotoContainer>
            <Photo image={photo} />
        </UserPhotoContainer>
    )
}

const UserPhotoContainer = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    margin-right: 10px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    cursor: pointer;
`

const Photo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: url(${props => props.image});
    background-size: cover;
`