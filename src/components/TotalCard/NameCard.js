import React, { useState, useRef } from "react";
import { DeleteBtn, InputTxt, DollarSign, Txt } from "../../globalStyles";
import { NameCardCont, Flex } from "./totalCardStyles";
import InlineEdit from "../InlineEdit/InlineEdit";
import TrashBin from "../Icons/TrashBin";

const NameCard = ({ single, names, setNames }) => {
    const nameRef = useRef();

    const [nameInput, setNameInput] = useState("");

    const deleteNameHandler = () => {
        setNames(names.filter(el => el.id !== single.id));
    };

    return (
        <NameCardCont>
            <InlineEdit
                text={nameInput}
                placeholder="Name"
                childRef={nameRef}
                type="input"
                >
                <InputTxt
                    ref={nameRef}
                    name="name"
                    placeholder="Name"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                />
            </InlineEdit>

            <Flex>
                <DollarSign>{"$"}</DollarSign>
                <Txt>{"240"}</Txt>
            </Flex>

            <DeleteBtn onClick={deleteNameHandler}>
                <TrashBin/>
            </DeleteBtn>
        </NameCardCont>
    )

};

export default NameCard;