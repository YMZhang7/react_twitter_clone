import styled from "styled-components"

export const SearchbarContainer = styled.div`
    height: 8vh;
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
`

export const PeopleContainer = styled.div`
    height: 85vh;
    width: 100%;
    overflow-y: scroll;
`

export const PeopleCardsContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    padding: 10px;
    border-right: ${props => props.focus ? "3px solid #1DA1F2" : "3px solid transparent"};
`

export const Photo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: url(${props => props.image});
    background-size: cover;
`

export const NameContainer = styled.div`
    width: 80%;
    height: 50px;
    text-align: start;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 5px;
    font-size: 15px;
`
export const TitlebarNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ChatControlContainer = styled.div`
    position: absolute;
    bottom: 0px;
    width: 99%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    font-size: 25px;
    border-radius: 50px;
    color: #1DA1F2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

export const MessageInputArea = styled.div`
    width: 80%;
    background-color: #E5E5E5;
    height: 35px;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const InputComponent = styled.input`
    height: 90%;
    width: 80%;
    border: none;
    outline: none;
    background-color: transparent;
`