import React, { useContext } from 'react';
import CalculatorContext from '../../CalculatorContext';
import './CalculatorButton.css';

const CalculatorButton = ({
  text,
  symbol,
  onClick,
  variant = 'dark',
}: {
  text: string;
  variant?: string;
  symbol?: string;
  onClick?: () => void;
}) => {
  const { append } = useContext(CalculatorContext);

  const click = () => {
    if (onClick) {
      onClick();
    }

    if (symbol) {
      append(symbol);
    }
  };

  return (
    <div
      className={`calculator-button calculator-button-${variant}`}
      onClick={click}
    >
      <p className="calculator-button-text">{text}</p>
    </div>
  );
};

export default CalculatorButton;
