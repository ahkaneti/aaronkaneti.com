import React, { useState, useEffect } from 'react';
import {
  ToggleWrapper,
  NameFade,
  Capital,
  Name,
  WordHolder,
  NameHolder,
  PhotoWrapper,
  UpperWrapper,
  ShortInfo,
} from './styles';

//Pics
import AHK from 'assets/AHK.png';

//Additions
import DarkModeToggle from 'react-dark-mode-toggle'; //https://github.com/cawfree/react-dark-mode-toggle#readme

export const UpperHolder = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [aneti, setAneti] = useState(false);
  const [aron, setAron] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAneti(true);
    }, 3500);
    setTimeout(() => {
      setAron(true);
    }, 1500);
  }, []);
  return (
    <UpperWrapper>
      <ToggleWrapper>
        <DarkModeToggle onChange={setDarkMode} checked={darkMode} size={75} />
      </ToggleWrapper>
      <h1>Hi! I'm</h1>
      <NameHolder>
        <WordHolder first>
          <Capital>A</Capital>
          {aron && (
            <Name>
              aron
              <NameFade />
            </Name>
          )}
        </WordHolder>
        <PhotoWrapper place="intro">
          <img alt="ahk" src={AHK} />
          <ShortInfo>UI Developer</ShortInfo>
        </PhotoWrapper>
        <WordHolder last>
          <Capital>K</Capital>
          {aneti && (
            <Name>
              aneti <NameFade />
            </Name>
          )}
        </WordHolder>
      </NameHolder>
      <h2>I'm a Frontend Engineer.</h2>
      <i className="ri-arrow-down-line" />
    </UpperWrapper>
  );
};
