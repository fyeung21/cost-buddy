import React, { useState, useRef } from "react";
import { InputTxt, DollarSign } from "../../globalStyles";
import InlineEdit from "../InlineEdit/InlineEdit";
import { Flex } from "./itemCardStyles";

const Description = () => {
    const inputRef = useRef();
    const textareaRef = useRef();

    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");

    return (
        <>
            <InlineEdit
                text={description}
                placeholder="Description"
                childRef={textareaRef}
                type="input"
                >
                <InputTxt
                    ref={textareaRef}
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
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

export default Description;