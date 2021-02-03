import React from "react"
import {
    PageStructureContainer,
    ContentContainer,
} from "./twitter_web_structure_components"
import LeftSidebar from "../left_sidebar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Homepage from "../../pages/homepage";
import ExplorePage from "../../pages/explore_page"

export default function TwitterWebpage(){
    return(
        <PageStructureContainer>
            <ContentContainer>
                <Router>
                    <LeftSidebar />
                    <Switch>
                        <Route path="/home" component={Homepage} />
                        <Route path="/explore" component={ExplorePage} />
                        <Route path="/notifications" component={SomeContent} />
                        <Route path="/messages" component={SomeContent} />
                        <Route path="/bookmarks" component={SomeContent} />
                        <Route path="/lists" component={SomeContent} />
                        <Route path="/profile" component={SomeContent} />
                        <Route path="/"><Redirect to="/home" /></Route>
                    </Switch>
                </Router>
            </ContentContainer>
        </PageStructureContainer>
    )
}

function SomeContent (){
    return(
        <h1>Hello</h1>
    )
}