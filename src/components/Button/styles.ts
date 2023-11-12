import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 700;

  border: none;
  border-radius: 4px;

  color: ${props => props.theme.buttonTextColor};
  background-color: ${props => props.theme.buttonColor};

  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.buttonHoverColor};
  }
`;