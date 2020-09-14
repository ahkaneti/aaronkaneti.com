import React from 'react';
import '../styles/App.css';
import '../styles/AboutMe.css';

import Logos from '../components/Logos.js';


import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


function AboutMe(){
  return(
    <div className='App'>
      <div className="midpart">
        <h1><Typist><Typist.Delay ms={1000}/>About <strong>Me</strong></Typist></h1>
        <h3>Bachelor of Science in Psychology & Computer Science <br/> Front-End Engineer • Data Analyst</h3>
        <p style={{marginLeft: "10%", marginRight: "10%"}}><strong>I am a software engineer that strives to create code that is as ergonomically induced as possible.
          My aim, when coding, is to create code that <i>anyone</i> can use.</strong></p>
        <h1><Typist><Typist.Delay ms={2000} /><strong>Technical Expertise</strong></Typist></h1>
        <div className="expertise-row" style={{ display: "flex", justifyContent: "center" }}>
          <div className="all-parts">
            <p className='subject'><strong>React.js</strong></p>
            <p className='percentage'>90%</p>
            <div className="total"><div className="achieved"></div></div>
          </div>
        </div>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>HTML 5</strong></p>
            <p className='percentage'>90%</p>
            <div className="total"><div className="achieved"></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>JavaScript</strong></p>
            <p className='percentage'>90%</p>
            <div className="total"><div className="achieved"></div></div>
          </div>
        </div>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>Unity</strong></p>
            <p className='percentage'>80%</p>
            <div className="total"><div className="achieved" style={{ width: "80%" }}></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>java</strong></p>
            <p className='percentage'>75%</p>
            <div className="total"><div className="achieved" style={{ width: "75%" }}></div></div>
          </div>
        </div>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>React Native</strong></p>
            <p className='percentage'>70%</p>
            <div className="total"><div className="achieved" style={{ width: "70%" }}></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>C++</strong></p>
            <p className='percentage'>80%</p>
            <div className="total"><div className="achieved" style={{ width: "80%" }}></div></div>
          </div>
        </div>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>Python</strong></p>
            <p className='percentage'>85%</p>
            <div className="total"><div className="achieved" style={{ width: "85%" }}></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>C#</strong></p>
            <p className='percentage'>70%</p>
            <div className="total"><div className="achieved" style={{ width: "70%" }}></div></div>
          </div>
        </div>
        <div className="expertise-row">
          <div className="all-parts">
            <p className='subject'><strong>CSS3</strong></p>
            <p className='percentage'>80%</p>
            <div className="total"><div className="achieved" style={{ width: "80%" }}></div></div>
          </div>
          <div className="all-parts">
            <p className='subject'><strong>Racket</strong></p>
            <p className='percentage'>90%</p>
            <div className="total"><div className="achieved" ></div></div>
          </div>
        </div>
      </div>
      <Logos/>
    </div>
  )
}
export default AboutMe;