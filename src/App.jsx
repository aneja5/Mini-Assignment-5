import React from 'react';
import Cell from './Cell';
import './App.css';
import { ToggleProvider, useToggle } from './ToggleContext';

function Grid() {
  const { onCount } = useToggle();

  return (
    <div>
      <div className="counter">Count: {onCount}</div>
      <div className="grid">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
}

function App() {
  return (
    <ToggleProvider>
      <Grid />
    </ToggleProvider>
  );
}

export default App;
