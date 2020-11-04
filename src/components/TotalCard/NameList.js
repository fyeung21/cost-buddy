import React, { useState, useRef } from "react";
import InlineEdit from "../InlineEdit/InlineEdit";
import { Flex, InputTxt, DollarSign } from "../ItemCard/itemCardStyles";

const NameList = () => {
    const inputRef = useRef();
    const textareaRef = useRef();

    const [task, setTask] = useState("");
    const [name, setName] = useState("");

    return (
        <>
            <InlineEdit
                text={name}
                placeholder="Name"
                childRef={textareaRef}
                type="input"
                >
                <InputTxt
                    ref={textareaRef}
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
            />
            </InlineEdit>
            <Flex>
                <DollarSign>{"$"}</DollarSign>
                <InlineEdit
                    text={task}
                    placeholder="Price"
                    childRef={inputRef}
                    type="input"
                >  
                <InputTxt
                    ref={inputRef}
                    type="text"
                    name="task"
                    placeholder="Price"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
            </InlineEdit>
            </Flex>
        </>
    )

};

export default NameList;