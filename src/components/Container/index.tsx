import { StyledContainer } from "./styles";

const PageContainer = (props) => {
  const { children } = props;

  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

export default PageContainer;