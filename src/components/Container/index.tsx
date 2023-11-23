import React from 'react';
import { StyledContainer } from './styles';

type PageContainerProps = {
  children: React.JSX.Element;
};

const PageContainer: React.FunctionComponent<PageContainerProps> = (props) => {
  const { children } = props;

  return <StyledContainer>{children}</StyledContainer>;
};

export default PageContainer;
