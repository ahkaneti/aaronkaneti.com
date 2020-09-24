import React, { Component } from 'react';

import '../styles/singularProjectMobile.css';

import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import { Button } from 'react-bootstrap';

import HearoLogo from'../assets/HearoLogo.png';
import LetMeAskLogo from '../assets/LetMeAskLogo.png';
import TaskfullLogo from '../assets/TaskfullLogo.jpg';
import NUPayLogo from '../assets/NUWalletLogo.png';


import { RiGithubLine } from 'react-icons/ri';

export default class ProjectMobile extends Component
{
    render()
    {
        const {name, github_link, used_technologies, description, contributors, other_links} = this.props.project
        return(
            <div className="screen-holder">
                <div className="singular-header">
                    <div className="back-holder">
                        <Link
                        to="/projects">
                            <Button>Back</Button>
                        </Link>
                    </div>
                    {name === "hymn" ? 
                        <div className="hymn-logo-holder">
                            <p>hymn</p>
                        </div>
                        :
                        <div className="id-holder">
                            <div className="name-holder">
                                {name.includes(' ') ? <p>{name}</p>: name.includes('-')? <p>{name}</p>:<p style={{fontSize: '175%'}}>{name}</p>}
                            </div>
                            {name ==="TaskFull" ? <div className="singular-logo-holder">
                                <img src={TaskfullLogo} alt="TaskfullLogo" className="singular-logo"/>
                            </div>
                            :
                            <div/>
                            }
                            {name ==="NUPay" ? <div className="singular-logo-holder">
                                <img src={NUPayLogo} alt="NUPayLogo" className="singular-logo"/>
                            </div>
                            :
                            <div/>
                            }
                            {name ==="Hearo" ? <div className="singular-logo-holder">
                                <img src={HearoLogo} alt="HearoLogo" className="singular-logo"/>
                            </div>
                            :
                            <div/>
                            }
                            {name ==="LetMeAsk" ? <div className="singular-logo-holder">
                                <img src={LetMeAskLogo} alt="LetMeAskLogo" className="singular-logo"/>
                            </div>
                            :
                            <div/>
                            }
                        </div>
                    }
                </div>
                <div className='body-holder'>
                    <div className="singular-desc-holder">
                        <p className="singular-desc">{description}</p>
                    </div>
                    <div className="singular-video-holder">
                        {other_links && <ReactPlayer 
                        url={other_links}
                        width={global.isMobile ? window.innerWidth * 0.9 : window.innerWidth * 0.6}
                        height={global.isMobile ? window.innerWidth * 0.9 * 0.56 : window.innerWidth * 0.6 * 0.56}
                        style={{marginLeft: '2%', marginRight: '2%'}}/>}
                    </div>
                    <div className="exp-holder">
                        {contributors && <p>I worked on this project with {contributors}.</p>}
                        <p>Technologies used in the making of this project: [{used_technologies}]</p>
                    </div>
                    <div className="github-holder">
                        <a target="_blank" href={github_link}>
                            <Button style={{marginLeft:'40%'}}>
                                <RiGithubLine size={32} color="white"/>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}