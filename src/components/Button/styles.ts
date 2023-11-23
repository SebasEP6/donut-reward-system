import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 12px;
  width: 152px;

  font-size: 1.2rem;
  font-weight: 700;

  border: none;
  border-radius: 4px;

  cursor: pointer;

  color: ${(props) => props.theme.buttonTextColor};
  background-color: ${(props) => props.theme.buttonColor};

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverColor};
  }

  &:active {
    background-color: ${(props) => props.theme.buttonActiveColor};
  }
`;
