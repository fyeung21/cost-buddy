import React, { useState, useRef } from "react";
import InlineEdit from "../InlineEdit/InlineEdit";
import { InputTxt} from "../ItemCard/itemCardStyles";

const NameList = () => {
    const nameRef = useRef();

    const [name, setName] = useState("");

    return (
        <>
            <InlineEdit
                text={name}
                placeholder="Name"
                childRef={nameRef}
                type="input"
                >
                <InputTxt
                    ref={nameRef}
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
            />
            </InlineEdit>
        </>
    )

};

export default NameList;