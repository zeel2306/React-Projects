import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const [password, setPassword] = useState('');



 const handleLogin = () => {
    setLoginError('');
    if (!loginEmail || !password) {
      setLoginError('Email and password are required');
      return;
    }
    onLogin(loginEmail, password);
  };

 return (
    <div className="centered-container">
      <div className="hero_text">
        <p className="content_para">Welcome to Our Job Portal</p>
        <h1>Login to <span className="green-text">Continue</span></h1>
        <p className="subheading">Please enter your email to start your journey.</p>

        <div className="email_form">
          <input
            type="email"
            placeholder="Enter your email"
            className="email_input"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

           <input
            type="password"
            placeholder="Set a password"
            className="email_input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> 
          
          <button className="get_started_btn" onClick={handleLogin}>Login</button>
          {loginError && <p style={{ color: 'red', marginTop: '10px' }}>{loginError}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
