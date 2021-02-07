import styled from "styled-components"

export const PageContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    left: 250px;
`

export const MiddlePartContainer = styled.div`
    position: relative;
    width: 65%;
    height: 100%;
    /* padding: 5px; */
    /* border-left: 2px solid white;
    border-right: 2px solid white; */
`

export const RightPartContainer = styled.div`
    width: 35%;
    height: 100%;
    padding: 5px 20px 5px 20px;
    overflow-y: scroll;
`