import React from 'react';
import {
  ModalBackground,
  ModalContent,
  Exp,
  Name,
  Date,
  Desc,
  TitleHolder,
} from './styles';
import { EDUCATIONEXPERIENCE } from 'assets/educationexperience';

export const EduModal = ({ handleEduModal }) => {
  const closeModal = e => {
    if (e.target === e.currentTarget) {
      handleEduModal();
    }
  };
  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent>
        <TitleHolder>
          <h1>Education</h1>
          <h1>Experience</h1>
        </TitleHolder>
        {EDUCATIONEXPERIENCE.map(exp => {
          return (
            <Exp key={exp.name} i={exp.exp}>
              <Name>{exp.name}</Name>
              <Date>{exp.year}</Date>
              <Desc>{exp.desc}</Desc>
            </Exp>
          );
        })}
      </ModalContent>
    </ModalBackground>
  );
};
