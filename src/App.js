import React from 'react';
import "./reset.css";
import './App.css';
import ItemCard from './components/ItemCard/ItemCard';

const App = () => {
  return (
    <div>
      <h1>cost buddy</h1>
      <div>
        <ItemCard />
      </div>
    </div>
  );
}

export default App;
