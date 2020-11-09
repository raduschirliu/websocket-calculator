import React, { useContext } from 'react';
import CalculatorContext from '../../contexts/CalculatorContext';
import CalculatorButton from '../calculator-button/CalculatorButton';
import './Calculator.css';

const Calculator = () => {
  const { send, clear, calcString, append } = useContext(CalculatorContext);
  const symbol = (str: string) => () => append(str);
  
  return (
    <div className="calculator-container">
      <div className="calculator-string">
        <p>{calcString}</p>
      </div>
      <div className="calculator-buttons">
        <div className="calculator-numbers">
          <CalculatorButton onClick={symbol('7')} text='7'/>
          <CalculatorButton onClick={symbol('8')} text='8'/>
          <CalculatorButton onClick={symbol('9')} text='9'/>
          <CalculatorButton onClick={symbol('4')} text='4'/>
          <CalculatorButton onClick={symbol('5')} text='5'/>
          <CalculatorButton onClick={symbol('6')} text='6'/>
          <CalculatorButton onClick={symbol('1')} text='1'/>
          <CalculatorButton onClick={symbol('2')} text='2'/>
          <CalculatorButton onClick={symbol('3')} text='3'/>
          <CalculatorButton onClick={symbol('.')} text='.'/>
          <CalculatorButton onClick={symbol('0')} text='0'/>
          <CalculatorButton onClick={send} text='=' />
        </div>
        <div className="calculator-operations">
          <CalculatorButton onClick={clear} text='C' variant='light' />
          <CalculatorButton onClick={symbol('/')} text='/' variant='light' />
          <CalculatorButton onClick={symbol('*')} text='x' variant='light' />
          <CalculatorButton onClick={symbol('-')} text='-' variant='light' />
          <CalculatorButton onClick={symbol('+')} text='+' variant='light' />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
