import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";

export const LabelCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 2rem 1rem;
`
export const LabelTxt = styled.h1`
    color: ${theme.bodyFontColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodyFontSize};
    font-weight: 800;
    text-transform: capitalize;
`

const CardLabels = () => {
    return (
        <LabelCont>
            <LabelTxt>item description</LabelTxt>
            <LabelTxt>names</LabelTxt>
            <LabelTxt>select all ({"8"})</LabelTxt>
            <LabelTxt>split amount</LabelTxt>
        </LabelCont>
    )
}

export default CardLabels;