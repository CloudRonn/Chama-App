import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    phone: '',
    username: '',
    email: '',
    password: '',
    confirm: ''
  });

  const [error, setError] = useState('');

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    if (Object.values(form).some(v => !v.trim())) {
      return setError('All fields are required');
    }

    if (form.password !== form.confirm) {
      return setError('Passwords do not match');
    }

    try {
      const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

      const res = await fetch(`${API}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: form.phone,
          username: form.username,
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg || 'Registration failed');
      }

      console.log('REGISTER →', data.msg);
      setForm({
        phone: '',
        username: '',
        email: '',
        password: '',
        confirm: ''
      });

      navigate('/login');
    } catch (err) {
      setError(err.message || 'Registration failed, please try again.');
    }
  };

  return (
    <div className="register-overlay">
      <div className="register-container">
        <button className="register-close-btn" onClick={() => navigate('/')}>×</button>

        <div className="register-header">
          <h2>Register</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="register-input"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="register-input"
            value={form.username}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="register-input"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="register-input"
            value={form.password}
            onChange={handleChange}
          />
          <input
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            className="register-input"
            value={form.confirm}
            onChange={handleChange}
          />

          {error && <p className="register-error">{error}</p>}

          <button className="register-submit" type="submit">
            Register
          </button>
        </form>

        <p className="login-link">
          Already have an account?
          <span
            onClick={() => navigate('/login')}
            style={{
              color: '#fd5f04',
              cursor: 'pointer',
              fontWeight: 'normal',
              fontSize: '1.2rem'
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
