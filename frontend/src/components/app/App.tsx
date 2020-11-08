import React from 'react';
import { CalculatorProvider } from '../../contexts/CalculatorContext';
import Calculator from '../calculator/Calculator';
import ClearText from '../clear-text/ClearText';
import Log from '../log/Log';
import StatusText from '../status-text/StatusText';
import './App.css';

const App = () => {
  return (
    <CalculatorProvider>
      <div className="app-container">
        <StatusText />
        <div className="app-side-view">
          <Calculator />
          <Log />
        </div>
        <ClearText />
      </div>
    </CalculatorProvider>
  );
};

export default App;
