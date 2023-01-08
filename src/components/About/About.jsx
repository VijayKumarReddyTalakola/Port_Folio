import React from 'react'
import "./About.css"
import award from '../../Images/award.jpg'
import pic from "../../Images/photo.jpg"
const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card">
                <img src={pic} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About</h1>
          <p className="a-sub">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <p className="a-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
          <div className="a-award">
            <img src={award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h3 className="a-award-title">International Design</h3>
              <p className="a-award-desc">
                Contrary to popular belief, Lorem Ipsum is not simply random text
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About