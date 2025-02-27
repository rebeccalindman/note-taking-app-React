import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  colorScheme?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, colorScheme = "blue" }) => {
  return (
    <button className={`button ${colorScheme}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
