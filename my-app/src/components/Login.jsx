import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    identifier: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.identifier || !form.password) {
      return setError('All fields are required');
    }

    try {
      const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

      const res = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailOrPhone: form.identifier,
          password: form.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg || 'Login failed');
      }

      console.log('LOGIN →', data.msg);

     
      // Redirect to dashboard/home
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Try again.');
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <button className="close-btn" onClick={() => navigate('/')}>×</button>

        <div className="login-header">
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            name="identifier"
            type="text"
            placeholder="Username / Email / Phone"
            className="login-input"
            value={form.identifier}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="login-input"
            value={form.password}
            onChange={handleChange}
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-submit">Login</button>
        </form>

        <div className="forgot">
          <p>Forgot Password</p>
        </div>

        <div className="register-link">
          <h2>
            If you don't have an account:
            <span
              onClick={() => navigate('/register')}
              style={{
                color: '#fd5f04',
                cursor: 'pointer',
                fontWeight: 'normal',
                fontSize: '1.2rem'
              }}
            >
              Register
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
