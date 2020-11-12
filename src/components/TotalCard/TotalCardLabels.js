import React from "react";
import { TotalLabelCont, TotalLabelTxt } from "./totalCardStyles";

const TotalCardLabels = () => {

    return (
        <TotalLabelCont>
            <TotalLabelTxt>name</TotalLabelTxt>
            <TotalLabelTxt>total amount</TotalLabelTxt>
            <TotalLabelTxt>delete</TotalLabelTxt>
        </TotalLabelCont>
    )
};

export default TotalCardLabels;