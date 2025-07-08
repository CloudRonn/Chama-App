import React, { useState } from 'react';
import '../styles/Home.css';
import Logo from '../assets/chama-logo.png';
import Login from '../components/Login';

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <div className={showLogin ? "home-container blur-background" : "home-container"}>
      {/* Navbar */}
      <div className="navbar">
        <img src={Logo} alt="ChamaLogo" className="logo" />
        <div className='navlinks'>
          <a href="#">How It Works</a>
          <a href="#">Contact us</a>
        </div>
        <button className='loginbutton' onClick={() => setShowLogin(true)}>Login</button>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <button>Create Chama</button>
        <button>Join Chama</button>
      </div>

      <p>This is a home page</p>
    </div>
     {/* Conditionally show Login Popup */}
      {showLogin && <Login closeLogin={() => setShowLogin(false)} />}
    </>
  );
};

export default Home;
