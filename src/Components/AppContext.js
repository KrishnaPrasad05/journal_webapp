import React, { createContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [variableValue, setVariableValue] = useState('https://aspiring-steel-earthworm.glitch.me');

  return (
    <AppContext.Provider value={{ variableValue, setVariableValue }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext