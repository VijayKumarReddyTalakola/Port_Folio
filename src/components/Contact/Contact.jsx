import React,{ useRef, useContext }from 'react'
import { ThemeContext } from '../../Context'
import Phone from "../../Images/phone.png"
import Email from "../../Images/email.png"
import Address from "../../Images/address.jpeg"
import emailjs from '@emailjs/browser';
import "./Contact.css"
const Contact = () => {
    const formRef = useRef();
    const theme=useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_9inzcz7', 'template_lg8ahdf',formRef.current, '_8hE7B_7PzOSTxPxm')
        .then((result) => {
          console.log(result.text);
          e.target.reset();
        }, (error) => {
          console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Lets discuss</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +919515643851
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        talakolavijaykumar@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Guntur,Andhra Pradeh ,India-522005
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <h4>What's your story?</h4>
                    Get in touch. Always available for  freelancing if the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                   <input style={{backgroundColor:darkMode && "#333" ,color:darkMode && "#fff"}} type="text" required placeholder='Name' name="user_name"/>
                   <input style={{backgroundColor:darkMode && "#333" ,color:darkMode && "#fff"}} type="text" required placeholder='Subject' name="user_subject"/>
                   <input style={{backgroundColor:darkMode && "#333" ,color:darkMode && "#fff"}} type="email" required placeholder='Email' name="user_email"/>
                   <textarea style={{backgroundColor:darkMode && "#333" ,color:darkMode && "#fff"}} rows="4" required placeholder='Message' name="message"/><br/>
                   <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact