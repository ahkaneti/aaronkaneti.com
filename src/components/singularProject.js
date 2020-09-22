import React, { Component } from "react";
import '../styles/singularProject.css';

import HearoLogo from '../assets/HearoLogo.png';
import LetMeAskLogo from '../assets/LetMeAskLogo.png';
import TaskfullLogo from '../assets/TaskfullLogo.jpg';

import { Button } from 'react-bootstrap';
import ReactPlayer from "react-player";
import { RiGithubLine } from 'react-icons/ri';


export default class Project extends Component
{
    render(){
        const {name, github_link, used_technologies, description, contributors, other_links} = this.props.project
        return(
            <div className="App">
                <div className="midpart">
                    <div className="toppart">
                        {name === "hymn" ?
                            <div className="hymn_logo_holder">
                                    <p className="hymn_logo_desktop">hymn</p>
                            </div> 
                            :
                            <div className="name_logo_holder">
                                {name === "Hearo" ? 
                                <div className="projectlogo">
                                <img src={HearoLogo} alt="Hearo Logo" className="projectlogo" />
                                </div>
                                :
                                <div/>
                                }
                                {name === "LetMeAsk" ? 
                                    <div className="projectlogo">
                                    <img src={LetMeAskLogo} alt="Hearo Logo" className="projectlogo" />
                                    </div>
                                    :
                                    <div/>
                                }
                                {name === "Taskfull" ? 
                                    <div className="projectlogo">
                                    <img src={TaskfullLogo} alt="Hearo Logo" className=""/>
                                    </div>
                                    :
                                    <div/>
                                }
                                <p>{name}</p>
                            </div>
                        }
                    </div> 
                    <div className="description_holder">
                        {description}
                    </div>
                    <div className="video_holder">
                    <ReactPlayer
                        url={other_links}
                    />
                    </div>
                    <div className="explanation_holder">
                        {contributors? <p>I worked on this project with {contributors}.</p> :<div/>}
                        <p>Used technologies: [{used_technologies}]</p>
                    </div>
                    <Button>
                        <a href={github_link}>
                            {console.log(github_link)}
                            <RiGithubLine size={55} color='white'/>
                        </a>
                    </Button>
                </div>
            </div>
        )
    }
}
