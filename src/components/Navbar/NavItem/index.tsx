import React from 'react';
import { StyledContainer } from './styles';
import { IMenuItem } from '../../Layout/Dashboard/constants';
import LabelText from '../../Text/Label';
import SubMenu from '../SubMenu';

type NavItemProps = {
  item: IMenuItem;
};

const NavItem: React.FunctionComponent<NavItemProps> = ({ item }) => {
  const renderSubItems = item.subItems?.map((subItem) => (
    <LabelText key={`submenu_${subItem.id}_menu${item.id}`}>
      {subItem.title}
    </LabelText>
  ));

  return (
    <StyledContainer>
      <LabelText>{item.title}</LabelText>

      <SubMenu>{renderSubItems}</SubMenu>
    </StyledContainer>
  );
};

export default NavItem;
