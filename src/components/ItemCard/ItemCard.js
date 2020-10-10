import React from "react";

const ItemCard = () => {
    return (
        <>
            <div>
                <h1>{"description inline"}</h1>
                <p>${" price"}</p>
            </div>

            <div>
                <p>name with checkbox</p>
                <p>name with checkbox</p>
                <p>name with checkbox</p>
            </div>

            <div>
                <p>{"split amount based on total and number of checkboxes checked. Need to round up."}</p>
            </div>
        </>
    )
}

export default ItemCard;