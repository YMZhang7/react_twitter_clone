import React from "react"
import {
    Background,
    DeleteButtonContainer,
} from "./tweet_editting_popup_components"
import { ImBin } from "react-icons/im"

export default function TweetEdittingPopup({show, close, left, bottom, deleteTweet}){
    console.log(left)
    console.log(bottom)
    const deleteButtonClicked = (e) => {
        e.stopPropagation()
        console.log('delete tweet')
        deleteTweet()
    }
    return (
        <Background show={show} onClick={close}>
            <DeleteButtonContainer left={left} bottom={bottom} onClick={deleteButtonClicked}>
                <ImBin />Delete
            </DeleteButtonContainer>
        </Background>
    )
}