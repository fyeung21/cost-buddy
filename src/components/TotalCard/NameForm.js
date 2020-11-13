import React from "react";
import { NameInput, AddNameBtn, Form } from "./totalCardStyles";
import AddUser from "../Icons/AddUser";

const NameForm = ({setNames, names, inputText, setInputText, splitAmounts, setSplitAmounts}) => {
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const addNameHandler = (e) => {
        e.preventDefault();
            setNames([
                ...names,
                { id: Math.random() * 1000,
                  nameText: inputText,
                  checked: false,
                  amountsOwed: splitAmounts
                }
            ]);
            setInputText("");
            setSplitAmounts(["0"]);
      }

    return (
        <form>
            <Form>
            <NameInput
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                placeholder="Add new name"
            />
            <AddNameBtn
                onClick={addNameHandler}
                type="submit"
            >
                    <AddUser/>
            </AddNameBtn>
        </Form>
        </form>
    )
}

export default NameForm;