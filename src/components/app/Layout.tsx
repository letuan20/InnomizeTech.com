import React from 'react';
import { RecoilRoot } from 'recoil';
import GoBottom from './GoBottom';
import '../../assets/styles/style.scss';
import '../../assets/styles/responsive.scss';

const Layout = ({ children }) => {
  return (
    <RecoilRoot>
      <GoBottom />
      {children}
    </RecoilRoot>
  );
};

export default Layout;
