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
  const [splitAmounts, setSplitAmounts] = useState([]);

  const addItemHandler = (e) => {
    e.preventDefault();
        setItems([
            ...items,
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
          splitAmounts={splitAmounts}
          setSplitAmounts={setSplitAmounts}
        />

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
