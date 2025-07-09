import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ closeLogin }) => {
  return (
    <div className="login-overlay">
      <div className="login-container">
        <button className="close-btn" onClick={closeLogin}>×</button>
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
        <p className="register-link">
            If you don't have an account:
            <Link to="/register"> Register</Link>
        </p>
           
      </div>
    </div>
  );
};

export default Login;
