import styled from "styled-components"

export const Titlebar = styled.div`
    width: 100%;
    height: 7vh;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const NavigationBarContainer = styled.div`
    width: 100%;
    height: 7vh;
    display: grid;
    grid-template-columns: repeat(1fr, 2);
`

export const NotificationsContainer = styled.div`
    width: 100%;
    height: 87vh;
    overflow-y: scroll;

`

export const NotificationContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #E5E5E5;
    padding: 5px 5px 5px 70px;
    position: relative;
    &:hover{
        background-color: rgba(230, 226, 227, 0.3);
    }
`

export const NotificationLabel = styled.div`
    /* background-color: red; */
    text-align: start;
    margin: 5px;
    
`


export const NotificationContent = styled.div`
    text-align: start;
    color: #5B7083;
    margin: 5px;
`

export const Photo = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: url(${props => props.image});
    background-size: cover;
    margin: 5px;
`