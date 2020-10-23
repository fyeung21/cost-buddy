import React, {useState} from 'react';
import "./reset.css";
import './App.css';
import Logo from './components/Logo/Logo';
import ItemList from './components/ItemList/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  const addItemHandler = (e) => {
    e.preventDefault();
        setItems([
            ...items,
            { id: Math.random() * 1000 }
        ]);
  }

  return (
    <div>
      <Logo/>
      <div>
        <ItemList
          items={items}
          setItems={setItems}
        />
      </div>
        <button onClick={addItemHandler}>click here to add</button>
    </div>
  );
}

export default App;
