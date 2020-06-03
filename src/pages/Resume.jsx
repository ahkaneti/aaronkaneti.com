import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/resume.pdf';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import '../styles/App.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
  textLayers.forEach((layer) => {
    const { style } = layer;
    style.top = '0';
    style.left = '0';
    style.transform = '';
  });
}

function Resume(){
  const resumeHeight = window.innerHeight * 1.5;
  return(
    <div className="App">
      <div className="mid">
        <h1><Typist><Typist.Delay ms={1000} /><strong>Resumé</strong></Typist></h1>
        <h2><strong>Last Updated 28th of May, 2020.</strong></h2>
        <Document file={resume} className="resume_holder">
          <Page height={resumeHeight} pageNumber={1} onLoadSuccess={removeTextLayerOffset} renderAnnotationLayer />
        </Document>
      </div> 
    </div>
  )
}

export default Resume;