import React from "react";
import { DeleteBtn, DollarSign, Txt } from "../../globalStyles";
import { NameCardCont, Flex } from "./totalCardStyles";
import TrashBin from "../Icons/TrashBin";

const NameCard = ({ single, names, setNames, splitAmounts, nameText }) => {

    const deleteNameHandler = () => {
        setNames(names.filter(el => el.id !== single.id));
    };

    return (
        <NameCardCont>
            <Txt>{nameText}</Txt>
            <Flex>
                <DollarSign>{"$"}</DollarSign>
                <Txt>{splitAmounts}</Txt>
            </Flex>

            <DeleteBtn onClick={deleteNameHandler}>
                <TrashBin/>
            </DeleteBtn>
        </NameCardCont>
    )

};

export default NameCard;