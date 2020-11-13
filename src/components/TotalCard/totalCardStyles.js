import styled from "styled-components";
import { theme } from "../../globalStyles";

////  Total Card

export const TotalCardCont = styled.div`
    margin: 0 auto;
`
export const DisplayCard = styled.div`
    background-color: #fff;
    border-radius: 20px;
    padding: 2rem;
    margin: 0 auto;
`
export const Container = styled.div`
    margin: 0 auto;
`

////  Total Card Labels

export const TotalLabelCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 2rem 1rem;
`
export const TotalLabelTxt = styled.p`
    color: ${theme.headingFontColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 800;
    text-transform: capitalize;
`
////  Name Form

export const NameInput = styled.input`
    box-shadow: none;
    border-radius: 15px;
    padding: 0.5rem;
    font-size: ${theme.bodyFontSize};
    background-color: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border: 2px solid lightgrey;

    :hover {
        border: 2px solid ${theme.hoverColor};
    }
    :focus {
        border: 2px solid ${theme.hoverColor};
    }
`
export const AddNameBtn = styled.button`
    background-color: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border: 2px solid lightgrey;
    border-radius: 15px;
    margin: 0.5rem;
    padding: 0.25rem 0.5rem;
    color: lightgrey;

    :hover {
        border: 2px solid ${theme.hoverColor};
        color: ${theme.hoverColor};
    }
`
export const Form = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

////  Name Card 

export const NameCardCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Flex = styled.div`
    display: flex;
    flex-direction: row;
`