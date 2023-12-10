import styled from 'styled-components';

export const StyledContainer = styled.div<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 24px;
  border-radius: 48px;
  background-color: ${(props) => props.$color};
`;
