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

export const Logo = ({ name, onClick, palette, small }) => {
  return (
    <LogoWrapper palette={palette}>
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
      <LogoInfo palette={palette}>
        <LogoName>{name}</LogoName>
        {!small && name === 'Resume' ? (
          <LogoButtonWrapper>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <LogoButton first palette={palette}>
                View
              </LogoButton>
            </a>
            <a href={Resume} download>
              <LogoButton second palette={palette}>
                Download
              </LogoButton>
            </a>
          </LogoButtonWrapper>
        ) : (
          <LogoButtonWrapper>
            <LogoButton large onClick={onClick} palette={palette}>
              Learn More
            </LogoButton>
          </LogoButtonWrapper>
        )}
        {small && (
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <LogoButton palette={palette} large>
              View
            </LogoButton>
          </a>
        )}
      </LogoInfo>
    </LogoWrapper>
  );
};
