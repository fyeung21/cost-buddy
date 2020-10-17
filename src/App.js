import React from 'react';
import "./reset.css";
import './App.css';
import Logo from './components/Logo/Logo';
import ItemCard from './components/ItemCard/ItemCard';

const App = () => {
  return (
    <div>
      <Logo/>
      <div>
        <ItemCard />
      </div>
    </div>
  );
}

export default App;
