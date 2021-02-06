import React from "react"
import {
    MiddlePartContainer,
    PageContainer, RightPartContainer
} from "../../components/page_partition"
import Searchbar from "../../components/search_bar"

export default function MessagesPage(){
    return(
        <PageContainer>
            <RightPartContainer style={{borderLeft: "1px solid #E5E5E5"}}>
                <Searchbar />
            </RightPartContainer>
            <MiddlePartContainer></MiddlePartContainer>
        </PageContainer>
    )
}