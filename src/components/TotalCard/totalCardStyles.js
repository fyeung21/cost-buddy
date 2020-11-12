import styled from "styled-components";
import { theme } from "../../globalStyles";

export const DisplayCard = styled.div`
    background-color: #fff;
    border-radius: 20px;
    padding: 2rem;
    // width: 750px;
    margin: 0 auto;
`
export const Container = styled.div`
    // width: 600px;
    margin: 0 auto;
`
export const NameCardCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // width: 650px;
`
export const Flex = styled.div`
    display: flex;
    flex-direction: row;
`
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
export const TotalCardCont = styled.div`
    // width: 600px;
    margin: 0 auto;
`