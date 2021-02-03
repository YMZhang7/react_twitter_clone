import React from "react"
import Searchbar from "../../components/search_bar"
import {
    HomepageContainer,
    HomepageBodyContainer,
    RightSidebarContainer,
    
} from "../homepage/homepage_components"
import {
    TopSearchBarContainer,
    SettingsIcon,
    TopbarContainer,
    IconContainer
} from "./explore_page_components"
import NavigationBar from "../../components/navigation_bar"

export default function ExplorePage(){

    return(
        <HomepageContainer>
            <HomepageBodyContainer>
                <TopbarContainer>
                    <TopSearchBarContainer>
                        <Searchbar />
                        <IconContainer><SettingsIcon /></IconContainer>
                    </TopSearchBarContainer>
                    <NavigationBar />
                </TopbarContainer>
                
            </HomepageBodyContainer>
            <RightSidebarContainer>

            </RightSidebarContainer>
        </HomepageContainer>
    )
}