import styled from "styled-components"

export const ReplyContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    margin-top: 20px;
`

export const LeftSide = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
`

export const RightSide = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    justify-content: center;
    align-items: stretch;
`
export const ViewControl = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const InputArea = styled.textarea`
    width: 100%;
    height: 75%;
    resize: none;
    font-family: apple-system, system-ui, segoe;
    font-size: 17px;
    border: none;
    outline: none;
    background-color: transparent;
`

export const BottomBar = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`

export const SmallButtonGroup = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    cursor: pointer;
    color: #5B7083;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

export const Photo = styled.div`
    width: 40px;
    height: 40px;
    background: url(${props => props.image});
    background-size: cover;
    border-radius: 50%;
`