import React from "react";
import ItemCard from "../ItemCard/ItemCard";

import styled from "styled-components";

export const ListCont = styled.div`
    width: 1000px;
    margin: 0 auto;
`

const ItemList = ({items, setItems}) => {
    return (
        <ListCont>
            <ul>
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        items={items}
                        setItems={setItems}
                    />
                ))}
            </ul>
        </ListCont>
    )
};

export default ItemList;