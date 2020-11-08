import React from 'react';
import { useContext } from 'react';
import CalculatorContext from '../../CalculatorContext';
import './StatusText.css';

const StatusText = () => {
  const { status } = useContext(CalculatorContext);
  
  return (
    <div className="status-container">
      <p className="status-title">WebSocket Calculator</p>
      <p className="status-text">{status}</p>
    </div>
  );
};

export default StatusText;
