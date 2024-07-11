import React, { useState } from 'react';
import './LoginSignup.css';

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import person_icon from '../Assets/person.png';

function LoginSignup() {
  const [Action, setAction] = useState("Sign Up");

  return (
    <div className='body'>
      <div className='contianer'>
        <div className='header'>
          <div className='text'>{Action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {Action === "Login" ? null : (
            <div className='input'>
              <img src={person_icon} alt="" />
              <input type="text" name="" id="" />
            </div>
          )}
          <div className='input'>
            <img src={email_icon} alt="" />
            <input type="email" name="" id="" />
          </div>
          <div className='input'>
            <img src={password_icon} alt="" />
            <input type="password" name="" id="" />
          </div>
        </div>
       
        {Action==="Sign Up"?<div></div>: <div className='forgot-password'>
          Lost password <span>click here!</span>
        </div> }
        <div className='submit-contianer'>
          <div
            className={Action === "Login" ? "submit gray" : "submit"}
            onClick={() => { setAction("Sign Up") }}
          >
            Sign Up
          </div>
          <div
            className={Action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => { setAction("Login") }}
          >
            Login
          </div>
        </div>
      </div>
     </div>
  );
}

export default LoginSignup;

