import React, { useState, useEffect } from 'react';
import pic from '../assets/profile_pic.jpg';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
//https://www.npmjs.com/package/react-typist ^^^^ 



function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(true);
    window.addEventListener("scroll", onScroll);

    return function cleanup() {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrolled]);
  return (
    <div className="App">
      <div className="screen">
        <div className="welcome_text">
          <p styles={{ fontFamily: "Montserrat" }}>
            Hi, I'm Aaron! I'm a
              <Typist cursor={{ blink: true, }}>
              <span>developer</span>
              <Typist.Backspace count={9} delay={1200} />
              <span>student</span>
              <Typist.Backspace count={7} delay={1200} />
              <span>Front-End Engineer</span>
            </Typist>
          </p>
        </div> 
        <div className="pro_pic_holder">
          <img className="pro_pic" src={pic} alt='professional_pic' />
        </div>
      </div>
    </div>
  );
}

export default Home;
