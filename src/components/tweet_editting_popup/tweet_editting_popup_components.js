import styled from "styled-components"

export const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.1);
    display: ${props => props.show ? "flex" : "none"};
    z-index: 1;
`

export const DeleteButtonContainer = styled.div`
    position: absolute;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.8);
    left: ${props => props.left + "px"};
    bottom: ${props => props.bottom + "px"};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    color: red;
    cursor: pointer;
`