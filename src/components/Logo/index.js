import React from 'react';

import {
  LogoWrapper,
  LogoInfo,
  LogoName,
  LogoButton,
  LogoButtonWrapper,
} from './styles.js';

//Assets
import RalfiMade from 'assets/RalfiMade.png';
import Experience from 'assets/Experience.png';
import File from 'assets/file.png';
import Resume from 'assets/ahkaneti_resume.pdf';

export const Logo = ({ name, onClick }) => {
  return (
    <LogoWrapper>
      <img
        src={
          name === 'Hobbies'
            ? RalfiMade
            : name === 'Experience'
            ? Experience
            : File
        }
        alt={'sommething'}
      />
      <LogoInfo>
        <LogoName>{name}</LogoName>
        {name === 'Resume' ? (
          <LogoButtonWrapper>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <LogoButton first>View</LogoButton>
            </a>
            <a href={Resume} download>
              <LogoButton second>Download</LogoButton>
            </a>
          </LogoButtonWrapper>
        ) : (
          <LogoButtonWrapper>
            <LogoButton large onClick={onClick}>
              Learn More
            </LogoButton>
          </LogoButtonWrapper>
        )}
      </LogoInfo>
    </LogoWrapper>
  );
};
