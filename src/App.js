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
            { id: Math.random() * 1000 }
        ]);
  }
  const addNameHandler = (e) => {
    e.preventDefault();
        setNames([
            ...names,
            { id: Math.random() * 1000 }
        ]);
  }

  return (
    <>
      <Logo/>
      <MainCont>
        <TotalCard
          names={names}
          setNames={setNames}
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
