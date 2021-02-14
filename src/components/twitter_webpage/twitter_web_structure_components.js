import styled from "styled-components"

export const PageStructureContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    background: linear-gradient(to bottom right, rgba(198, 230, 255, 0.3) 40%, white 60%, rgba(158, 211, 226, 0.3));
    overflow: hidden;
    /* background-color: red; */
    /* overflow-y: hidden; */
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    min-width: 1250px;
    /* max-width: 95%; */
    position: relative;
    background-color: transparent;
    box-shadow: 2px 0px 10px rgba(0,0,0,0.4);
    border-radius: 10px;
`