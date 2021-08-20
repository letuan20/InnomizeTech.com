import React from 'react';
import { RecoilRoot } from 'recoil';
import GoTop from './GoTop';

import '../../assets/styles/style.scss';
import '../../assets/styles/responsive.scss';

const Layout = ({ children }) => {
  return (
    <RecoilRoot>
      {children}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </RecoilRoot>
  );
};

export default Layout;
