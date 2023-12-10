import React from 'react';
import { TextProps } from '..';
import { StyledText } from './styles';

const LightTitleText: React.FunctionComponent<TextProps> = ({ children }) => (
  <StyledText>{children}</StyledText>
);

export default LightTitleText;
