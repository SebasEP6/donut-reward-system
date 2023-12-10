import styled from 'styled-components';

export const StyledContainer = styled.div<{ $show: boolean }>`
  overflow: hidden;
  position: absolute;
  top: 100%;
  right: 0;
  width: 248px;
  background-color: red;
  display: ${(props) => (props.$show ? 'block' : 'none')};
`;
