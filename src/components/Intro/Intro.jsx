import React from 'react'
import './intro.css'
import Me from "../../Images/me.png"
const Intro = () => {
  return (
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello,My name is </h2>
            <h1 className="i-name">Vijay Kumar</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Mern Developer</div>
              </div>
            </div>
            <p className="i-desc">
              I design and develop services for customers of all sizes,
              specializing in creating styles,modern websites,webservices 
              and onlnine stores.
            </p>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
  );
}

export default Intro