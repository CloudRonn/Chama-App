import React from 'react';
import '../styles/Home.css';
import Logo from '../assets/chama-logo.png';
const Home = () =>{
    return (
        <> 
            <div className="navbar">
                <img src={Logo} alt="ChamaLogo" className="logo" />
                <div className='navlinks'>
                    <a href="#">How It Works</a>
                    <a href="#">Contact us</a>
                    
                </div>
                <button className='loginbutton'>Login</button>
            </div>
            <div className="hero-section">
                    <button>Create Chama</button>
                    <button> Join Chama</button>
            </div>

            <p> This is a home page</p>
        </>
    );

}
export default Home;