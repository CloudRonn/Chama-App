import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Logo from '../assets/chama-logo.png';

const Home = () => {
  const navigate= useNavigate();

  return (
    <>
     <div className="home-container">
      <div className="navbar">
        <img src={Logo} alt="Chama Logo" className="logo" />

        <div className="navlinks">
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <button className="loginbutton" onClick={() => navigate('/login')}>
          Login
        </button>
      </div>

      <div className="description">
        <p>
          Where unity meets opportunity. Your Chama, your future.
          <br />
        </p>
        <p className="mini-description">
          Join a circle of trust. Save, lend and grow together.
        </p>
      </div>

      <div className="hero-section">
         <button className="createbutton" onClick={() => navigate('/create-chama')}>
            Create a Chama
          </button>
        <button className="joinbutton">Join a Chama</button>
      </div>
        </div>
    </>
  );
};

export default Home;
