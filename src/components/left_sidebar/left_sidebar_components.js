import styled from "styled-components"
import {GiFeather} from "react-icons/gi"

export const LeftSidebarContainer = styled.div`
    /* position: fixed; */
    /* position: absolute; */
    position: relative;
    top: 0px;
    /* width: 250px; */
    width: ${props => props.shrink ? "80px": "250px"};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    /* background-color: lavender; */
    z-index: 1;
`
export const TwitterIconContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 10px;
    color: #1DA1F2;
`

export const TwitterIcon = styled.div`
    width: 40px;
    height: 40px;
    font-size: 35px;
    margin-left: 3px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    } */
`

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.shrink ? "center" : ""};
    width: 95%;
    margin-bottom: 20px;
    /* margin-top: 10px; */
`

export const SidebarItemContainer = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    background-color: ${props => props.focus ? "rgba(29, 161, 242, 0.3)" : "transparent"};
    padding: 10px;
    margin: 7px;
    color: #0F1419;
    cursor: pointer;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

export const IconContainer = styled.div`
    font-size: 30px;
    color: ${props => props.focused ? '#1DA1F2' : '#0f1419'};
`

export const TextLabel = styled.div`
    height: 100%;
    font-size: 18px;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ShrinkedContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    /* margin: 7px; */
    margin-bottom: 8%;
    color: #0F1419;
    cursor: pointer;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
`

export function SmallTweetButton(){
    return <SmallTweetButtonContainer><GiFeather /></SmallTweetButtonContainer>
}

export const SmallTweetButtonContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1DA1F2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background-color: #0b7bc1;
    }
`

export function Photo({image}){
    return <PhotoContainer>
        <Image image={image} />
    </PhotoContainer>
}

const PhotoContainer = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: rgba(29, 161, 242, 0.1);
    }
 `

export const Image = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: url(${props => props.image});
    background-size: cover;
`