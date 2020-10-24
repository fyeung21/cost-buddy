import React from "react";
import styled from "styled-components";
import CardLabels from "./CardLabels";
import TrashBin from "../Icons/TrashBin";

export const CardCont = styled.div`
    width: 1000px;
    margin: 0 auto;
`
export const Display = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 20px;
    padding: 2rem;
`
export const Column = styled.div`
    width: 300px;
`

const ItemCard = ({item, items, setItems}) => {

    const deleteItemHandler = () => {
        setItems(items.filter(el => el.id !== item.id));
    };

    const ItemCardId = item.id + 1;

    return (
        <div>
            <p>{ItemCardId}</p>
            <CardCont>
                <CardLabels/>
                <Display>
                    <Column>
                        <h1>{"description inline"}</h1>
                        <p>${" price"}</p>
                    </Column>

                    <Column>
                        <p>name with checkbox</p>
                        <p>name with checkbox</p>
                        <p>name with checkbox</p>
                    </Column>

                    <Column>
                        <p>{"split amount based on total and number of checkboxes checked. Need to round up."}</p>
                    </Column>
                </Display>
            </CardCont>

            <button onClick={deleteItemHandler}>
                <TrashBin/>
            </button>
        </div>
    )
}

export default ItemCard;