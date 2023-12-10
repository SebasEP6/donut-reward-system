import { getDonutIcon } from '../../utils/icons';
import SmallText from '../Text/Small';
import { StyledContainer, StyledIcon } from './style';

type RewardProps = {
  qty?: number;
};

const Reward: React.FunctionComponent<RewardProps> = ({ qty = 0 }) => (
  <StyledContainer>
    <SmallText>{`${qty} Donut${qty !== 1 ? 's' : ''}`}</SmallText>

    <StyledIcon src={getDonutIcon()} alt="Donut icon" />
  </StyledContainer>
);

export default Reward;
