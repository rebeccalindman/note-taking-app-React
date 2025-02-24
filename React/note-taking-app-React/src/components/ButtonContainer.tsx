import React from 'react';
import Button from './Button';
import { ButtonContainerProps } from '../types/buttonTypes';

const ButtonContainer: React.FC<ButtonContainerProps> = ({ buttons }) => (
  <div className="button-container">
    {buttons.map((button, index) => (
      <Button
        key={index}
        text={button.text}
        onClick={button.onClick}
        disabled={button.disabled}
        type={button.type || 'button'}
        variant={button.variant || 'primary'}
      />
    ))}
  </div>
);

export default ButtonContainer;
