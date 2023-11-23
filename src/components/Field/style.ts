import styled from 'styled-components';

export const StyledField = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
  width: 248px;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: 700;
`;

export const StyledInput = styled.input`
  padding: 4px;

  background: none;

  font-size: 0.9rem;

  border: none;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;
