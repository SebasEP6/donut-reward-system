import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 16px;
  border-radius: 4px;
  padding: 24px;
  width: 512px;
  height: 184px;
  background-color: #d8f0f8;
  cursor: pointer;
`;

export const RewardContainer = styled.div`
  align-self: flex-end;
`;

export const BodyContainer = styled.div`
  min-height: 64px;
  display: flex;
  align-items: flex-start;
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 16px;
`;
