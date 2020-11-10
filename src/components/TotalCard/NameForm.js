import React from "react";
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
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
            />
            <button
                onClick={addNameHandler}
                type="submit"
            >
                <AddUser/>
            </button>
        </form>
    )
}

export default NameForm;