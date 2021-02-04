import React from "react"
import styled from "styled-components"

export default function NavigationBar(){
    const [onFocus, setOnFocus] = React.useState("for-you")
    const handleClick = (e) => {
        setOnFocus(e.target.id)
    }

    return(
        <NavigationBarContainer>
            <NavigationOption id="for-you" onClick={handleClick} focus={onFocus === "for-you"}>For you</NavigationOption>
            <NavigationOption id="covid-19" onClick={handleClick} focus={onFocus === "covid-19"}>COVID-19</NavigationOption>
            <NavigationOption id="trending" onClick={handleClick} focus={onFocus === "trending"}>Trending</NavigationOption>
            <NavigationOption id="news" onClick={handleClick} focus={onFocus === "news"}>News</NavigationOption>
            <NavigationOption id="sports" onClick={handleClick} focus={onFocus === "sports"}>Sports</NavigationOption>
            <NavigationOption id="entertainment" onClick={handleClick} focus={onFocus === "entertainment"}>Entertainment</NavigationOption>
        </NavigationBarContainer>
    )
}

const NavigationBarContainer = styled.div`
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 15% 20% 15% 10% 15% 25%;
    border-bottom: 1px solid #E5E5E5;
`

const NavigationOption = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: ${props => props.focus ? "#1DA1F2" : "#5B7083"};
    border-bottom: ${props => props.focus ? "3px solid #1DA1F2" : "3px solid transparent"};
    cursor: pointer;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`