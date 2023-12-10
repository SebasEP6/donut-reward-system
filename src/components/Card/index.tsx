import React from 'react';
import Reward from '../Reward';
import { StatusTypes, getStatusColor } from '../../utils/status';
import Label from '../Label';
import { FooterContainer, RewardContainer, StyledContainer } from './styles';
import { getCapitalizedWord } from '../../utils/helpers';
import TitleText from '../Text/Title';
import LightTitleText from '../Text/LightTitle';

type CardProps = {
  task: string;
  status: StatusTypes;
  qty: number;
  creator: string;
};

const Card: React.FunctionComponent<CardProps> = ({
  task,
  status,
  qty,
  creator,
}) => (
  <StyledContainer>
    <RewardContainer>
      <Reward qty={qty} />
    </RewardContainer>

    <TitleText>{task}</TitleText>

    <FooterContainer>
      <Label color={getStatusColor[status]}>{getCapitalizedWord(status)}</Label>

      <LightTitleText>{`Assigned by: ${creator}`}</LightTitleText>
    </FooterContainer>
  </StyledContainer>
);

export default Card;
