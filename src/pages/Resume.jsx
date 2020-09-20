import React, {useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/download_resume.pdf';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { Link } from 'react-router-dom';

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

export default function Resume(){
  const resumeHeight = window.innerHeight * 1.5;
  return(
    <div className={global.isMobile? "App_mobile":"App"}>
      <div className="mid">
        <h1><Typist><Typist.Delay ms={1000} /><strong>Résumé</strong></Typist></h1>
        {global.isMobile? <div/>:<h2><strong>Last Updated 20th of July, 2020.</strong></h2>}
        <Document file={resume} className={global.isMobile? "resume_holder_mobile":"resume_holder"}>
          <Page height={resumeHeight} style={{overflow:"hidden"}} pageNumber={1} onLoadSuccess={removeTextLayerOffset} renderAnnotationLayer />
        </Document>
        {global.isMobile ? 
            <Link
              to="/"
              className="navitem">
                <div className="route">
                  Home
                  </div>
                </Link>
          :
          <div/>}
      </div> 
    </div>
  )
}

