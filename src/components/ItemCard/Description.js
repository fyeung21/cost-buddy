import React, { useState, useRef } from "react";
import { Txt } from "../../globalStyles";
import InlineEdit from "../InlineEdit/InlineEdit";

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
                <input
                    ref={textareaRef}
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
            />
            </InlineEdit>
            <div>
                <Txt>{"$"}</Txt>
                <InlineEdit
                    text={task}
                    placeholder="Price"
                    childRef={inputRef}
                    type="input"
                >  
                <input
                    ref={inputRef}
                    type="text"
                    name="task"
                    placeholder="Price"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
            </InlineEdit>
            </div>
        </>
    )

};

export default Description;