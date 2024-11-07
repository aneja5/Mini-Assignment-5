import React, { useState } from 'react';
import './App.css';
import { useToggle } from './ToggleContext';

function Cell() {
  const [isOn, setIsOn] = useState(false);
  const { toggleCell } = useToggle();

  const handleClick = () => {
    setIsOn((prevState) => !prevState);
    toggleCell(!isOn);
  };

  let cellClass = 'cell';
  if (isOn) {
    cellClass += ' on';
  } else {
    cellClass += ' off';
  }

  return (
    <div 
      className={cellClass} 
      onClick={handleClick}
    />
  );
}

export default Cell;
