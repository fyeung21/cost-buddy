import styled from "styled-components";
import { theme } from "../../globalStyles";

//////////// ItemCard

export const ItemCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Display = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 20px;
    padding: 2rem;
`
export const Column = styled.div`
    width: 300px;
`
export const ItemNum = styled.p`
    color: ${theme.headingFontColor};
    font-family: ${theme.headingFont};
    font-size: ${theme.h1FontSize};
    font-weight: 800;
    margin: 1rem 0.5rem;
`

//////////// CardLabels

export const LabelCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 2rem 1rem;
`
export const LabelTxt = styled.h1`
    color: ${theme.headingFontColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 800;
    text-transform: capitalize;
`

//////////// Description

export const Flex = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.25rem 0;
`
export const InputTxt = styled.input`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyFontColor};
    font-weight: 400;
    line-height: 22px;
`
export const DollarSign = styled.p`
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    color: ${theme.bodyFontColor};
    font-weight: 400;
    line-height: 22px;
    margin: 0 0.25rem 0 0;
`