import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BuzzVerse</h3>
          <span className="loginDesc">Connect with people arround you.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" type="email" placeholder='Email' />
            <input className="loginInput" type="password" placeholder='Password' />
            <button className='loginButton'>Login</button>
            <span className="loginForgot">Forgot Password ?</span>
            <button className='registerButton'>Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;