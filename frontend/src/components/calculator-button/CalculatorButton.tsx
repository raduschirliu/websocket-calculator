import React from 'react';
import './CalculatorButton.css';

const CalculatorButton = ({
  text,
  onClick,
  variant = 'dark',
}: {
  text: string;
  variant?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`calculator-button calculator-button-${variant}`}
      onClick={onClick}
    >
      <p className="calculator-button-text">{text}</p>
    </div>
  );
};

export default CalculatorButton;
