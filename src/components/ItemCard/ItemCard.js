import React from "react";
import styled from "styled-components";
import { theme } from "../../globalStyles";

export const Display = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 20px;
    width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`
export const Column = styled.div`
    width: 300px;
`

const ItemCard = () => {
    return (
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
    )
}

export default ItemCard;