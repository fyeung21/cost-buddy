import React from "react";
import { LabelCont, LabelTxt } from "./itemCardStyles";

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