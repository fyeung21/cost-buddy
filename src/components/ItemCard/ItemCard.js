import React from "react";
import { DeleteBtn, Txt } from "../../globalStyles";
import { ItemCont, Display, Column, ItemNum } from "./itemCardStyles";
import CardLabels from "./CardLabels";
import TrashBin from "../Icons/TrashBin";

const ItemCard = ({item, items, setItems}) => {

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
                        <Txt>{"description inline"}</Txt>
                        <Txt>${" price"}</Txt>
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