import styled from "styled-components"

export const LeftSidebarContainer = styled.div`
    position: fixed;
    top: 0px;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TwitterIconContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 10px;
    color: #1DA1F2;
`

export const TwitterIcon = styled.div`
    width: 40px;
    height: 40px;
    font-size: 35px;
    margin-left: 3px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-bottom: 20px;
    margin-top: 15px;

`

export const SidebarItemContainer = styled.div`
    /* width: 60%; */
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    background-color: white;
    
    padding: 10px;
    margin: 8px;
    color: #0F1419;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

export const IconContainer = styled.div`
    font-size: 30px;
    color: ${props => props.focused ? '#1DA1F2' : '#0f1419'};
`

export const TextLabel = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin: 20px;
`