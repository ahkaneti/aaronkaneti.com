import React, { Component } from "react";

import "../styles/singularProjectMobile.css";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import HearoLogo from "../assets/HearoLogo.png";
import LetMeAskLogo from "../assets/LetMeAskRounded.png";
import TaskfullLogo from "../assets/TaskFullRounded.png";
import NUPayLogo from "../assets/NUWalletLogo.png";

import { RiGithubLine } from "react-icons/ri";

export default class ProjectMobile extends Component {
  render() {
    const {
      name,
      github_link,
      used_technologies,
      description,
      contributors,
      video_link,
    } = this.props.project;
    const mode = this.props.mode;
    return (
      <div className={mode ? "screen-holder light-screen" : "screen-holder"}>
        <div
          className={
            mode ? "singular-header light-top-component" : "singular-header"
          }
        >
          <div className="back-holder">
            <Link to="/projects">
              <Button>Back</Button>
            </Link>
          </div>
          {name === "hymn" ? (
            <div className="hymn-logo-holder">
              <p>hymn</p>
            </div>
          ) : (
            <div className="id-holder">
              <div className="name-holder">
                {name.includes(" ") ? (
                  <p>{name}</p>
                ) : name.includes("-") ? (
                  <p>{name}</p>
                ) : (
                  <p style={{ fontSize: "175%" }}>{name}</p>
                )}
              </div>
              {name === "TaskFull" ? (
                <div className="singular-logo-holder">
                  <img
                    src={TaskfullLogo}
                    alt="TaskfullLogo"
                    className="singular-logo"
                  />
                </div>
              ) : (
                <div />
              )}
              {name === "NUPay" ? (
                <div className="singular-logo-holder">
                  <img
                    src={NUPayLogo}
                    alt="NUPayLogo"
                    className="singular-logo"
                  />
                </div>
              ) : (
                <div />
              )}
              {name === "Hearo" ? (
                <div className="singular-logo-holder">
                  <img
                    src={HearoLogo}
                    alt="HearoLogo"
                    className="singular-logo"
                  />
                </div>
              ) : (
                <div />
              )}
              {name === "LetMeAsk" ? (
                <div className="singular-logo-holder">
                  <img
                    src={LetMeAskLogo}
                    alt="LetMeAskLogo"
                    className="singular-logo"
                  />
                </div>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
        <div className={mode ? "body-holder light-component" : "body-holder"}>
          <div className="singular-desc-holder">
            <p className="singular-desc">{description}</p>
          </div>
          <div className="singular-video-holder">
            {video_link ? (
              <iframe
                title={name + "video"}
                width={window.innerWidth * 0.9}
                height={window.innerWidth * 0.9 * 0.56}
                src={video_link}
                style={{ marginLeft: "2.5%" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div />
            )}
          </div>
          <div className="exp-holder">
            {contributors && (
              <p>I worked on this project with {contributors}.</p>
            )}
            <p>
              Technologies used in the making of this project: [
              {used_technologies}]
            </p>
          </div>
          <div className="github-holder">
            <a target="_blank" href={github_link}>
              <Button style={{ marginLeft: "40%" }}>
                <RiGithubLine size={32} color="white" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
