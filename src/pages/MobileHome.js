import React from 'react';
import pic from '../assets/profile_pic.jpg';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';

export default function MobileHome(){
  return(
    <div className="App_mobile">
      <div className="screen">
        <div className="welcome-text-mobile">
          <h1>Welcome!</h1>
        </div>
        <div className="pro_pic_holder">
          <img className="pro_pic_mobile" src={pic} alt='professional_pic' />
        </div>
        <div className ="description-text">
          <h3>I'm Aaron Kaneti. I love creating software that anyone can use.</h3>
        </div>
        <div className="routes">
          <div className="route">
            <Link
              to="/resume"
              className="navitem">Résumé</Link>
          </div>
          {/* <div className="route">
            <Link
              to="/projectsmobile"
              className="navitem">
              Projects</Link>
          </div> */}
          <div className="logo-holder-mobile">
            <div className="logo-background">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ahkaneti"><RiGithubLine size={35} color={"white"} /></a>
            </div>
            <div className="logo-background" style={{ marginLeft: "5.5%" }}>
              <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/aaronkaneti"><FaLinkedinIn size={30} color={"white"} style={{ paddingTop: "4", paddingLeft: "2", }} /></a>
            </div>
            <div className="logo-background" style={{ marginLeft: "5.5%" }}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/harunkaneti/"><FaFacebookF size={30} color={"white"} style={{ paddingTop: "4", paddingLeft: "2", }} /></a>
            </div>
            <div className="logo-background" style={{ marginLeft: "5.5%" }}>
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/ahkaneti"><FaInstagram size={30} color={"white"} style={{ paddingTop: "4", paddingLeft: "2", }} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}