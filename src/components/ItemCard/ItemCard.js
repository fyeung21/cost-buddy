import React from "react";
import { DeleteBtn } from "../../globalStyles";
import { ItemCont, Display, Column, ItemNum } from "./itemCardStyles";
import CardLabels from "./CardLabels";
import TrashBin from "../Icons/TrashBin";
import Description from "./Description";
import SelectNames from "./SelectNames";
import SplitAmount from "./SplitAmount";


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
                        <Description/>
                    </Column>

                    <Column>
                        <SelectNames/>
                    </Column>

                    <Column>
                        <SplitAmount/>
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