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
  PhotoNameWrapper,
  DescHolder,
  LongInfo,
  TitleDesc,
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
      <PhotoNameWrapper>
        <NameHolder>
          <WordHolder first>
            <Capital>A</Capital>
            {aron && (
              <Name first>
                aron
                <NameFade />
              </Name>
            )}
          </WordHolder>
          <WordHolder last>
            <Capital>K</Capital>
            {aneti && (
              <Name last>
                aneti <NameFade />
              </Name>
            )}
          </WordHolder>
        </NameHolder>

        <PhotoWrapper place="intro">
          <img alt="ahk" src={AHK} />
          <ShortInfo one>a UI Developer</ShortInfo>
          <ShortInfo two>a Frontend Engineer</ShortInfo>
        </PhotoWrapper>
        <DescHolder>
          <TitleDesc>Software Engineer remotely, based in Brooklyn</TitleDesc>
          <LongInfo>
            A software engineer that strives to create code that is as
            ergonomically induced as possible. My aim, when coding, is to create
            code that anyone can use.
          </LongInfo>
        </DescHolder>
      </PhotoNameWrapper>

      <h2>open to new positions</h2>
      <i className="ri-arrow-down-line" />
    </UpperWrapper>
  );
};
