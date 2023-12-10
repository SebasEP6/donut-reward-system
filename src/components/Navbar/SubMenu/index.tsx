import React, { ReactNode } from 'react';
import { StyledContainer } from './styles';

type SubMenuProps = {
  children: ReactNode;
  show?: boolean;
};

const SubMenu: React.FunctionComponent<SubMenuProps> = ({
  children,
  show = false,
}) => <StyledContainer $show={show}>{children}</StyledContainer>;

export default SubMenu;
