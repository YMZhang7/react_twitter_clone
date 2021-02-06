import React from "react"
import styled from "styled-components"

export default function NavigationBar({ options, handleNavigationClick }){
    
    const [onFocus, setOnFocus] = React.useState(options[0].id)
    const handleClick = (e) => {
        setOnFocus(e.target.id)
        handleNavigationClick(e)
    }

    const OptionComponents = options.map((option) => 
        <NavigationOption key={option.id} id={option.id} onClick={handleClick} focus={onFocus === option.id}>{option.text}</NavigationOption>
    )

    return(
        <NavigationBarContainer count={options.length}>
            {OptionComponents}
        </NavigationBarContainer>
    )
}

const NavigationBarContainer = styled.div`
    width: 100%;
    height: 6vh;
    display: grid;
    /* grid-template-columns: 15% 20% 15% 10% 15% 25%; */
    grid-template-columns: repeat(${props => props.count}, auto);
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