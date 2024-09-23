// components/CalculatorButton.tsx

import React from "react";
import styles from "../app/Calculator.module.css"; // Assuming the styles for button

interface CalculatorButtonProps {
  label: string;
  onClick: () => void;
  dataTestId?: string;
  className?: string;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  onClick,
  dataTestId,
  className = "",
}) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} data-testid={dataTestId}>
      {label}
    </button>
  );
};

export default CalculatorButton;
