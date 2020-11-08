import React, { useContext } from 'react';
import CalculatorContext from '../../contexts/CalculatorContext';
import CalculatorButton from '../calculator-button/CalculatorButton';
import './Calculator.css';

const Calculator = () => {
  const { send, clear, calcString } = useContext(CalculatorContext);

  const equalsClicked = () => {
    send();
  }

  const clearClicked = () => {
    clear();
  }
  
  return (
    <div className="calculator-container">
      <div className="calculator-string">
        <p>{calcString}</p>
      </div>
      <div className="calculator-buttons">
        <div className="calculator-numbers">
          <CalculatorButton symbol='7' text='7'/>
          <CalculatorButton symbol='8' text='8'/>
          <CalculatorButton symbol='9' text='9'/>
          <CalculatorButton symbol='4' text='4'/>
          <CalculatorButton symbol='5' text='5'/>
          <CalculatorButton symbol='6' text='6'/>
          <CalculatorButton symbol='1' text='1'/>
          <CalculatorButton symbol='2' text='2'/>
          <CalculatorButton symbol='3' text='3'/>
          <CalculatorButton symbol='.' text='.'/>
          <CalculatorButton symbol='0' text='0'/>
          <CalculatorButton text='=' onClick={equalsClicked} />
        </div>
        <div className="calculator-operations">
          <CalculatorButton text='C' onClick={clearClicked} variant='light' />
          <CalculatorButton symbol='/' text='/' variant='light' />
          <CalculatorButton symbol='*' text='x' variant='light' />
          <CalculatorButton symbol='-' text='-' variant='light' />
          <CalculatorButton symbol='+' text='+' variant='light' />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
