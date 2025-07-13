import React from 'react';
import {  useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login =() => {
  const navigate = useNavigate();

  return (
    <div className="login-overlay">
      <div className="login-container">
        <button className="close-btn" onClick={() => navigate('/')}>×</button>
        
        <div className="login-header">
          <h2>Login</h2>
        </div>

        <input
          type="text"
          placeholder="Username / Email / Phone"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        <button className="login-submit">Login</button>

        <div className="forgot">
            <p>Forgot Password</p>
        </div>

        <div className="register-link">
            <h2 >
                If you don't have an account:
                <span onClick={() => navigate('/register')} style={{ color: '#fd5f04', cursor: 'pointer', fontWeight: 'normal' , fontSize:'1.2rem' }}>Register</span>
            </h2>
        </div>          
      </div>
    </div>
  );
};

export default Login;
