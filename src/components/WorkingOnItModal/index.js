import React from 'react';

import { ModalBackground, ModalContent } from './styles';

import workingOnIt from 'assets/workingOnIt.png';

export const WorkingOnItModal = ({ handleWorkingModal }) => {
  const closeModal = e => {
    if (e.target === e.currentTarget) {
      handleWorkingModal();
    }
  };
  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent>
        <img src={workingOnIt} alt="working" />
        <p>
          Hey, hi, sorry, I am still working on this, but check back soon will
          ya?
        </p>
      </ModalContent>
    </ModalBackground>
  );
};
