import React from "react";
import { DisplayCard, Container } from "../TotalCard/totalCardStyles";
import NameCard from "./NameCard";

const TotalCard = ({names, setNames}) => {

    return (
        <DisplayCard>
            <Container>
            <ul>
                {names.map((single) => (
                    <NameCard
                        key={single.id}
                        single={single}
                        names={names}
                        setNames={setNames}
                    />
                ))}
            </ul>
            </Container>
        </DisplayCard>
    )

};

export default TotalCard;