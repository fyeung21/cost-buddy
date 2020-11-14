import React from "react";
import { Txt } from "../../globalStyles";
import { NamesConsumer } from "../Context/namesContext";


const SelectNames = () => {
    return (
    
            <NamesConsumer>
                { (nameList) => {
                    return (
                        <Txt> 
                            Hello {nameList} 
                        </Txt>
                    )
                }
                }
            </NamesConsumer>
        
    )
};

export default SelectNames;