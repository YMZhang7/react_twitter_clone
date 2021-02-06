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
    border-left: 1px solid #E5E5E5;
    border-right: 1px solid #E5E5E5;
`

export const RightPartContainer = styled.div`
    width: 35%;
    height: 100%;
    padding: 5px 20px 5px 20px;
    overflow-y: scroll;
`