import styled from "styled-components"

export const LeftSidebarContainer = styled.div`
    /* border-top-left-radius: 20px;
    border-bottom-left-radius: 20px; */
    position: fixed;
    top: 0px;
    width: 250px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* box-shadow: -5px 0px 8px rgba(0,0,0,0.1); */
    background-color: transparent;
    /* background: linear-gradient(to top left,white 0% ,rgba(232, 246, 254, 0.3) 100%); */
    /* background-color: rgba(232, 246, 254, 0.2); */
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
    /* margin-top: 10px; */
`

export const SidebarItemContainer = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    background-color: ${props => props.focus ? "rgba(29, 161, 242, 0.3)" : "transparent"};
    padding: 10px;
    margin: 7px;
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
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`