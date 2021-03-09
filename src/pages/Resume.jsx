import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../assets/download_resume.pdf";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { Link } from "react-router-dom";

import "../styles/App.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
  textLayers.forEach((layer) => {
    const { style } = layer;
    style.top = "0";
    style.left = "0";
    style.transform = "";
    style.display = "flex";
    style.justifyContent = "center";
  });
}

const Resume = (props) => {
  const resumeHeight = window.innerHeight * 1;
  return (
    <div className={props.device ? "App_mobile" : "App"}>
      <div className={props.mode ? "mid light-screen" : "mid"}>
        {props.device ? (
          <h1
            className={
              props.mode
                ? "welcome-text-mobile_main light-top-component"
                : "welcome-text-mobile_main"
            }
          >
            <strong>Résumé</strong>
          </h1>
        ) : (
          <h1>
            <Typist>
              <Typist.Delay ms={1000} />
              <strong>Résumé</strong>
            </Typist>
          </h1>
        )}
        {props.device ? (
          <div />
        ) : (
          <h2>
            <strong>Last Updated February 1st, 2021.</strong>
          </h2>
        )}
        <Document
          file={resume}
          className={props.device ? "resume_holder_mobile" : "resume_holder"}
        >
          <Page
            height={resumeHeight}
            style={{ overflow: "hidden", height: "50vh" }}
            pageNumber={1}
            onLoadSuccess={removeTextLayerOffset}
            renderAnnotationLayer
          />
        </Document>
        {props.device ? (
          <Link to="/" className="navitem">
            <div className={props.mode ? "route light-component" : "route"}>
              Home
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Resume;
