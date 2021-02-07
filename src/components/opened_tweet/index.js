import React from "react"
import {
    BackgroundScreen,
    TweetWindow,
    TweetTopBar
} from "./opened_tweet_components"

export default function OpenedTweet({tweet, closeTweet}){
    const closeOpenTweet = () => {
        closeTweet()
        console.log('close tweet')
    }

    const TweetWindowClicked = (e) => {
        console.log('tweet window clicked')
        e.stopPropagation() // avoid closeOpenTweet being called
    }

    return(
        <BackgroundScreen show={tweet} onClick={closeOpenTweet}>
            <TweetWindow onClick={TweetWindowClicked}>
                <TweetTopBar></TweetTopBar>
                {tweet && tweet.content}
            </TweetWindow>
        </BackgroundScreen>
    )
}