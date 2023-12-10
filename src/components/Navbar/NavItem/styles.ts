import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  padding: 20px 32px;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverColor};
  }

  &:active {
    background-color: ${(props) => props.theme.buttonActiveColor};
  }

  &:last-of-type {
    margin-left: auto;
  }
`;
