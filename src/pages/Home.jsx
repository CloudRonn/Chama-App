import React, { useState } from 'react';
import '../styles/Home.css';
import Logo from '../assets/chama-logo.png';
import Login from '../components/Login';
const Home = () =>{
     const [showLogin, setShowLogin] = useState(false);

    return (
        <> 
            <div className="navbar">
                <img src={Logo} alt="ChamaLogo" className="logo" />
                <div className='navlinks'>
                    <a href="#">How It Works</a>
                    <a href="#">Contact us</a>   
                </div>
                <button className='loginbutton' onClick={() => setShowLogin(true)}>Login</button>
            </div>
            <div className="description">
                <p>Where unity meets opportunity.1 Your Chama, your future.<br/></p>
                <p className='mini-description'>Join a circle of trust. Save, lend and grow together.</p>
            </div>
             <div className="hero-section">
                    <button className="createbutton">Create a Chama</button>
                    <button className="joinbutton"> Join a Chama</button>
            </div>
              {showLogin && <Login closeLogin={() => setShowLogin(false)} />}
        </>
 );
}
export default Home;
