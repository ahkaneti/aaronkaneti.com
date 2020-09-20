import React, { Component } from 'react';

import '../styles/App.css';
import '../styles/singularProject.css';

import HearoLogo from'../assets/HearoLogo.png';
import LetMeAskLogo from '../assets/LetMeAskLogo.png';
import TaskfullLogo from '../assets/TaskfullLogo.jpg'

export default class ProjectMobile extends Component
{
    render()
    {
        const {name, github_link, used_technologies, description, contributors, other_links} = this.props.project
        return(
            <div className="App">
                <div className="midpart">
                <div className="toppart">
                        {name === "hymn" ?
                            <div className="hymn_logo_holder">
                                    <p className="hymn_logo">hymn</p>
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
                </div>
            </div>
        )
    }
}