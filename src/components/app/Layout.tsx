import React from 'react';
import { RecoilRoot } from 'recoil';
import '../../assets/styles/style.scss';
import '../../assets/styles/responsive.scss';

const Layout = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Layout;
