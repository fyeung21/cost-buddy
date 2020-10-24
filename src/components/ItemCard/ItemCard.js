import React from "react";
import styled from "styled-components";
import { theme, DeleteBtn } from "../../globalStyles";
import CardLabels from "./CardLabels";
import TrashBin from "../Icons/TrashBin";

export const ItemCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
export const ItemNum = styled.p`
    color: ${theme.headingFontColor};
    font-family: ${theme.headingFont};
    font-size: ${theme.h1FontSize};
    font-weight: 800;
    margin: 1rem 0.5rem;
`

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
            </div>

            <DeleteBtn onClick={deleteItemHandler}>
                <TrashBin/>
            </DeleteBtn>
        </ItemCont>
    )
}

export default ItemCard;