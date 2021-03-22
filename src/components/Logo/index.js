import React from 'react';

import { LogoWrapper } from './styles.js';

//Assets
import RalfiMade from 'assets/RalfiMade.png';
import Experience from 'assets/Experience.png';
import File from 'assets/file.png';

export const Logo = ({ hobby = false, exp = false }) => {
  return (
    <LogoWrapper>
      <img
        src={hobby ? RalfiMade : exp ? Experience : File}
        alt={'sommething'}
      />
    </LogoWrapper>
  );
};
