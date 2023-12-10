import React from 'react';
import { StyledText } from './styles';
import { TextProps } from '..';

const SmallText: React.FunctionComponent<TextProps> = ({ children }) => (
  <StyledText>{children}</StyledText>
);

export default SmallText;
