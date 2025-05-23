import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BuzzVerse</h3>
          <span className="loginDesc">Connect with people arround you.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" type="text" placeholder='Username' />
            <input className="loginInput" type="email" placeholder='Email' />
            <input className="loginInput" type="password" placeholder='Password' />
            <button className='loginButton'>Sign Up</button>
            <button className='registerButton'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Register;