import React from 'react';
import { CalculatorProvider } from '../../CalculatorContext';
import Calculator from '../calculator/Calculator';
import Log from '../log/Log';
import './App.css';

const App = () => {
  return (
    <CalculatorProvider>
      <div className="app-container">
        <Calculator />
        <Log />
      </div>
    </CalculatorProvider>
  );
};

export default App;
