import styled from "styled-components"

export const PageContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    background-color: transparent;
`

export const MiddlePartContainer = styled.div`
    position: relative;
    /* width: 65%; */
    width: 650px;
    height: 100%;
`

export const RightPartContainer = styled.div`
    width: 350px;
    height: 100%;
    padding: 5px 20px 5px 20px;
    overflow-y: scroll;
    @media screen and (max-width: 1080px){
        display: none;
    }
`