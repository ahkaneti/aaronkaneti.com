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
  ContactButton,
  Copied,
  ActionHolder,
} from './styles';

//Pics
import AHK from 'assets/AHK.png';

//Additions
import DarkModeToggle from 'react-dark-mode-toggle'; //https://github.com/cawfree/react-dark-mode-toggle#readme

export const UpperHolder = ({
  onBackClick,
  mode,
  onChange,
  palette,
  textPalette,
}) => {
  const [aneti, setAneti] = useState(false);
  const [aron, setAron] = useState(false);
  const [contact, setContact] = useState('Contact Me');
  const [copied, setCopied] = useState(false);
  const copyEmailAddress = () => {
    const textField = document.createElement('textarea');
    textField.innerText = 'aaronkaneti@gmail.com';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  useEffect(() => {
    setTimeout(() => {
      setAneti(true);
    }, 2000);
    setTimeout(() => {
      setAron(true);
    }, 500);
  }, []);
  return (
    <UpperWrapper>
      <ToggleWrapper>
        <DarkModeToggle onChange={onChange} checked={mode} size={75} />
      </ToggleWrapper>
      <h1>Hi! I'm Aaron Kaneti</h1>
      <PhotoNameWrapper>
        <NameHolder>
          <WordHolder first>
            <Capital>A</Capital>
            {aron && (
              <Name first>
                aron
                <NameFade palette={palette} />
              </Name>
            )}
          </WordHolder>
          <WordHolder last>
            <Capital>K</Capital>
            {aneti && (
              <Name last>
                aneti <NameFade palette={palette} />
              </Name>
            )}
          </WordHolder>
        </NameHolder>

        <PhotoWrapper place="intro" palette={palette}>
          <img alt="my-pic" src={AHK} />
          <ShortInfo one palette={palette}>
            a UI Developer
          </ShortInfo>
          <ShortInfo two palette={palette}>
            a Frontend Engineer
          </ShortInfo>
        </PhotoWrapper>
        <DescHolder>
          <TitleDesc>Software Engineer remotely, based in Brooklyn</TitleDesc>
          <LongInfo textPalette={textPalette}>
            A software engineer that strives to create code that is as
            ergonomically induced as possible. My aim, when coding, is to create
            code that anyone can understand.
          </LongInfo>
          <ContactButton
            palette={palette}
            onMouseEnter={() => {
              setContact('aaronkaneti@gmail.com');
            }}
            onMouseLeave={() => setContact('Contact Me')}
            onClick={() => copyEmailAddress()}
          >
            {contact}
          </ContactButton>
          <Copied palette={palette} copied={copied}>
            Copied to clipboard.
          </Copied>
        </DescHolder>
      </PhotoNameWrapper>
      <h2>open to new positions</h2>
      <ActionHolder>
        <i className="ri-arrow-down-line" onClick={onBackClick} />
        <ContactButton
          palette={palette}
          onMouseEnter={() => {
            setContact('aaronkaneti@gmail.com');
          }}
          onMouseLeave={() => setContact('Contact Me')}
          onClick={() => copyEmailAddress()}
        >
          {contact}
        </ContactButton>
      </ActionHolder>
    </UpperWrapper>
  );
};
