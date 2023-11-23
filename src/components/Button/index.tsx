import React from 'react';
import { StyledButton } from './styles';

type ButtonProps = {
  children?: React.JSX.Element | string;
  onClick?: () => void;
};

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, onClick } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
