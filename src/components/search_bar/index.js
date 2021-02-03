import React from "react"
import styled from "styled-components"
import { AiOutlineSearch } from "react-icons/ai"

export default function Searchbar(){
    const [searchFocus, setSearchFocus] = React.useState(false)

    const handleSearchFocus = () => {
        setSearchFocus(true)
    }

    const handleSearchBlur = () => {
        setSearchFocus(false)
    }
    
    return(
        <SearchContainer isFocussed={searchFocus}>
            <AiOutlineSearch fontSize="25px" />
            <SearchArea type="text" placeholder="Search Twitter" onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    width: 100%;
    height: 40px;
    background-color: ${props => props.isFocussed ? "white" : "#E5E5E5"};
    color: ${props => props.isFocussed ? "#1DA1F2" : "#5B7083"};
    border: ${props => props.isFocussed ? "1px solid #1DA1F2" : ""};
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const SearchArea = styled.input`
    width: 80%;
    height: 90%;
    border: none;
    outline: none;
    background-color: transparent;
    ::placeholder{
        font-size: 15px;
        color: #5B7083;
    }
`