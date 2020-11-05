import React from "react";
import { DisplayCard, Container } from "../TotalCard/totalCardStyles";
import NameList from "./NameList";

const TotalCard = ({names, setNames}) => {

    return (
        <DisplayCard>
            <Container>
            <ul>
                {names.map((name) => (
                    <NameList
                        key={name.id}
                        name={name}
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