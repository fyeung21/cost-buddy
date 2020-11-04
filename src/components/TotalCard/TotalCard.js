import React from "react";
import { DisplayCard, Container } from "../TotalCard/totalCardStyles";
import NameList from "./NameList";

const TotalCard = () => {

    return (
        <DisplayCard>
            <Container>
                <NameList/>
            </Container>
        </DisplayCard>
    )

};

export default TotalCard;