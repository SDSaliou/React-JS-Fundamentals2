import React from 'react';
import './App.css';
import PlayersList from "./PlayersList";

function App() {
  return (
    <div>
    <h1 style={{ color: "blue",marginTop:"18px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>Player FIFA Profiles</h1>
    <PlayersList />
  </div>
);
};

export default App;
