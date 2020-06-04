import React from 'react';
import '../styles/App.css';
import '../styles/education.css';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

function Education()
{
  console.log('education');
  return(
    <div className="App">
      <div className='midpart'>
        <h1><Typist><Typist.Delay ms={1000} />Education & Experience</Typist></h1>
        <div className="holder">
          <div className="education">
            <h2>Education</h2>
            <div className="box">
              <p className="year">2019 - 2019</p>
              <p className="title"><strong>Resident at The Garage at Northwestern University</strong></p>
              <p className="description">Managed the startup 'hymn' as a part of the residency program
              at the Garage.</p>
            </div>
            <div className="box">
              <p className="year">2017 - 2020</p>
              <p className="title"><strong>IEEE Northwestern University Chapter</strong></p>
              <p className="description">Served in various different positions including, 
              Social Chair, Project Manager and President.
               Created a game using Unity, and two applications using React Native.</p>
            </div>
            <div className="box">
              <p className="year">2016 - 2020</p>
              <p className="title"><strong>Northwestern University</strong></p>
              <p className="description">Studied Psychology and Computer Science 
              in McCormick School of Engineering</p>
            </div>
            <div className="box">
              <p className="year">2012 - 2016</p>
              <p className="title"><strong>Ulus Private Jewish Schools</strong></p>
              <p className="description">Finished in the top 5% of his year as the 
              student body president. Completed the science track.</p>
            </div>
          </div>
          
          <div className="experience">
            <h2>Experience</h2>
            <div className="box">
              <p className="year">2019 - 2019</p>
              <p className="title"><strong>Data Scientist Intern / Software Engineering 
                Intern at Anodot</strong></p>
              <p className="description">Created a UI, using React, R and JavaScript,
               that helped interpret the anomaly data easily and made the process of 
               interpreting more accessible and ergonomically advanced.
               This UI was used by the Sales Engineers to help explain the main product 
               of Anodot, the anomaly detection, to the customers.</p>
            </div>
            <div className="box">
              <p className="year">2018 - 2020</p>
              <p className="title"><strong>Founder and Software Engineer at hymn</strong></p>
              <p className="description">Worked on the music service hymn. Managed the 
              start-up and worked on the Front-End interfaces as well as API integration.
              The start-up was selected to the Garage Residency program at Northwestern 
              University. The APIs are displayed on the right. </p>
            </div>
            <div className="box">
              <p className="year">2018 - 2018</p>
              <p className="title"><strong>Co-Founder and Software Engineer at Hearo</strong></p>
              <p className="description">Was part of the team that created the transcription
              app Hearo. Worked on the navigation part, the calling part and several other
              front-end side developments of the application. The app is displayed on the right.</p>
            </div>
            <div className="box">
              <p className="year">2017 - 2020</p>
              <p className="title"><strong>Peer Mentor at Northwestern University</strong></p>
              <p className="description">Peer mentored in the classes "Fundamentals of Computer
               Programming I & II", "Introduction to Artificial Intelligence" and Human Computer
               Interaction at Northwestern University.</p>
            </div>
            <div className="box">
              <p className="year">2017 - 2017</p>
              <p className="title"><strong>Front-End Engineering Intern at Inveon</strong></p>
              <p className="description">Worked on translating an application to 
               React Native and bugfixes, added several other features including Google Firebase
               Analytics.</p>
            </div>
            <div className="box">
              <p className="year">2014 - 2014</p>
              <p className="title"><strong>Web Developer Intern at Pixelsoft Office</strong></p>
              <p className="description">Helped create the Coca Cola machine interface at Turkey
               and editted some of the websites the company worked on.</p>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default Education;