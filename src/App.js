import React from 'react';
import './App.css';
import { Scoreboard } from './components/Scoreboard';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Scoreboard />
    </div>
  );
}

export default App;
