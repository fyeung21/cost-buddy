import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({items, setItems}) => {
    return (
        <div>
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
        </div>
    )
};

export default ItemList;