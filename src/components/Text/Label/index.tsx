import React from 'react';
import { StyledLabel } from './styles';
import { TextProps } from '..';

const LabelText: React.FunctionComponent<TextProps> = ({ children }) => (
  <StyledLabel>
    <LabelText>{children}</LabelText>
  </StyledLabel>
);

export default LabelText;
