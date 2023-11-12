import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  padding: 12px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background}
`;