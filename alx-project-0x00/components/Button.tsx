import React from 'react';
import { ButtonProps } from '@/interfaces/index';
const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return React.createElement('button', { className: styles }, title);
};

export default Button;