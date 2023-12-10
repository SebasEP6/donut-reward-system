import React from 'react';
import { StyledContainer, StyledNavbar } from './styles';
import NavItem from './NavItem';
import { IMenuItem } from '../Layout/Dashboard/constants';

type NavbarProps = {
  items: IMenuItem[];
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ items }) => {
  const renderNavItems = items.map((item) => (
    <NavItem key={`navbar_item_${item.id}`} item={item} />
  ));

  return (
    <StyledContainer>
      <StyledNavbar>{renderNavItems}</StyledNavbar>
    </StyledContainer>
  );
};

export default Navbar;
