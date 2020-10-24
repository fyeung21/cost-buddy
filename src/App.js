import React, { useState } from 'react';
import "./reset.css";
import './App.css';
import { MainCont, AddBtn } from "./globalStyles";
import Logo from './components/Logo/Logo';
import ItemList from './components/ItemList/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  const addItemHandler = (e) => {
    e.preventDefault();
        setItems([
            ...items,
            { id: items.length }
        ]);
  }

  return (
    <>
      <Logo/>
      <MainCont>
        <ItemList
          items={items}
          setItems={setItems}
        />
        <AddBtn onClick={addItemHandler}>
          Add new item
        </AddBtn>
      </MainCont>
    </>
  );
}

export default App;
