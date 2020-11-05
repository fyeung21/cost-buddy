import React, { useState } from 'react';
import "./reset.css";
import './App.css';
import { MainCont, AddBtn, Txt } from "./globalStyles";
import Logo from './components/Logo/Logo';
import ItemList from './components/ItemList/ItemList';
import TotalCard from './components/TotalCard/TotalCard';

const App = () => {
  const [items, setItems] = useState([]);
  const [names, setNames] = useState([]);

  const addItemHandler = (e) => {
    e.preventDefault();
        setItems([
            ...items,
            { id: items.length }
        ]);
  }
  const addNameHandler = (e) => {
    e.preventDefault();
        setNames([
            ...names,
            { id: names.length }
        ]);
  }

  return (
    <>
      <Logo/>
      <MainCont>
        <TotalCard
          names={names}
          setItems={setItems}
        />
        <AddBtn onClick={addNameHandler}>
          <Txt>Add new name</Txt>
        </AddBtn>

        <ItemList
          items={items}
          setItems={setItems}
        />
        <AddBtn onClick={addItemHandler}>
          <Txt>Add new item</Txt>
        </AddBtn>
      </MainCont>
    </>
  );
}

export default App;
