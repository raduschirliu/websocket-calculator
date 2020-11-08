import React from 'react';
import { useContext } from 'react';
import CalculatorContext, { IHistoryItem } from '../../contexts/CalculatorContext';
import './Log.css';

const Log = () => {
  const { setCalcString, history } = useContext(CalculatorContext);

  return (
    <div className="log-container">
      {history.map((item: IHistoryItem) => {
        return (
          <div
            className="log-item"
            key={item.timestamp.toISOString()}
            onClick={() => setCalcString(item.expression)}
          >
            <p className="log-content">{`${item.expression} = ${item.result}`}</p>
            <p className="log-timestamp">
              {item.timestamp.toLocaleTimeString('en-us')}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Log;
