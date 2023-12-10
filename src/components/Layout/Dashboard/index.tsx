import React, { ReactNode } from 'react';

import { StyledBody } from './styles';
import Navbar from '../../Navbar';
import { menuItems } from './constants';

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FunctionComponent<DashboardLayoutProps> = ({
  children,
}) => (
  <div>
    <Navbar items={menuItems} />

    <StyledBody>{children}</StyledBody>
  </div>
);

export default DashboardLayout;
