import React from "react"
import styled from "styled-components"
import LeftSidebar from "../../components/left_sidebar"

export default function Homepage(){
    document.title = "Home / Twitter"
    return (
        <HomepageContainer>
            <HomepageContentContainer>
                <LeftSidebar />
                <HomepageBody />
                <RightSidebar />
            </HomepageContentContainer>
        </HomepageContainer>
        
    )
    
}

const HomepageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const HomepageContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 85%;
`





function HomepageBody(){
    return (
        <HomepageBodyContainer>

        </HomepageBodyContainer>
    )
}

const HomepageBodyContainer = styled.div`
    width: 50%;
    height: 100%;
    background-color: yellow;
`
function RightSidebar(){
    return (
        <RightSidebarContainer>

        </RightSidebarContainer>
    )
}

const RightSidebarContainer = styled.div`
    background-color: orange;
    width: 30%;
    height: 100%;
`