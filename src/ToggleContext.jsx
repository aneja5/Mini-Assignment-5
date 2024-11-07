import React, { createContext, useContext, useState } from 'react';

const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [onCount, setOnCount] = useState(0);

  const toggleCell = (isOn) => {
    if (isOn) {
      setOnCount(onCount + 1);
    } else {
      setOnCount(onCount - 1);
    }
  };

  return (
    <ToggleContext.Provider value={{ onCount, toggleCell }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggle() {
  return useContext(ToggleContext);
}
