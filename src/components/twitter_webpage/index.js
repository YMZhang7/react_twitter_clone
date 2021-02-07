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
import NotificationPage from "../../pages/notification_page";
import MessagesPage from "../../pages/messages_page";
import BookmarksPage from "../../pages/bookmarks_page";
import ListsPage from "../../pages/lists_page";
import ProfilePage from "../../pages/profile_page"

export default function TwitterWebpage(){
    return(
        <PageStructureContainer>
            <ContentContainer>
                <Router>
                    <LeftSidebar />
                    <Switch>
                        <Route path="/home" component={Homepage} />
                        <Route path="/explore" component={ExplorePage} />
                        <Route path="/notifications" component={NotificationPage} />
                        <Route path="/messages" component={MessagesPage} />
                        <Route path="/bookmarks" component={BookmarksPage} />
                        <Route path="/lists" component={ListsPage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route path="/"><Redirect to="/home" /></Route>
                    </Switch>
                </Router>
            </ContentContainer>
        </PageStructureContainer>
    )
}