import React, { useState, useRef } from "react";
import { DeleteBtn } from "../../globalStyles";
import { InputTxt, Flex} from "../ItemCard/itemCardStyles";
import InlineEdit from "../InlineEdit/InlineEdit";
import TrashBin from "../Icons/TrashBin";

const NameList = ({ single, names, setNames }) => {
    const nameRef = useRef();

    const [nameInput, setNameInput] = useState("");

    const deleteNameHandler = () => {
        setNames(names.filter(el => el.id !== single.id));
    };

    return (
        <Flex>
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
            <DeleteBtn onClick={deleteNameHandler}>
                <TrashBin/>
            </DeleteBtn>
        </Flex>
    )

};

export default NameList;