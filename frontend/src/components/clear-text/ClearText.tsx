import React from 'react';
import { useContext } from 'react';
import CalculatorContext from '../../contexts/CalculatorContext';
import './ClearText.css';

const ClearText = () => {
  const { history, clearHistory } = useContext(CalculatorContext);

  if (history.length === 0) return null;

  return <p onClick={clearHistory} className="clear-text">Clear history</p>;
};

export default ClearText;