import React, { ReactNode } from 'react';
import { StyledContainer } from './styles';

type LabelProps = {
  color: string;
  children: ReactNode;
};

const Label: React.FunctionComponent<LabelProps> = ({ color, children }) => (
  <StyledContainer $color={color}>{children}</StyledContainer>
);

export default Label;
