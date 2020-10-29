import React, { useState, useRef } from "react";
import { DeleteBtn, Txt } from "../../globalStyles";
import { ItemCont, Display, Column, ItemNum } from "./itemCardStyles";
import CardLabels from "./CardLabels";
import TrashBin from "../Icons/TrashBin";
import InlineEdit from "../InlineEdit/InlineEdit";


const ItemCard = ({item, items, setItems}) => {

    const inputRef = useRef();
    const textareaRef = useRef();

    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");

    const deleteItemHandler = () => {
        setItems(items.filter(el => el.id !== item.id));
    };

    const ItemCardId = item.id + 1;

    return (
        <ItemCont>
            <ItemNum>{ItemCardId}</ItemNum>
            <div>
                <CardLabels/>
                <Display>
                    <Column>
                        <InlineEdit
                            text={description}
                            placeholder="Description"
                            childRef={textareaRef}
                            type="input"
                            >
                            <textarea
                                ref={textareaRef}
                                name="description"
                                placeholder="Description"
                                rows="3"
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
                    </Column>

                    <Column>
                        <Txt>name with checkbox</Txt>
                        <Txt>name with checkbox</Txt>
                        <Txt>name with checkbox</Txt>
                    </Column>

                    <Column>
                        <Txt>{"split amount based on total and number of checkboxes checked. Need to round up."}</Txt>
                    </Column>
                </Display>
            </div>

            <DeleteBtn onClick={deleteItemHandler}>
                <TrashBin/>
            </DeleteBtn>
        </ItemCont>
    )
}

export default ItemCard;