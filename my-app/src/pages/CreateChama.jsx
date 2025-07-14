import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateChama.css';

const CreateChama = () => {
  const [chamaName, setChamaName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('chamaName', chamaName);
    navigate('/add-members');
  };

  return (
    <div className="back">
      <div className="create-overlay">
         <div className="create-container">
      <h2>Enter Your Chama Name</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={chamaName}
          onChange={(e) => setChamaName(e.target.value)}
          placeholder="Chama Name"
          required
        />
        <button className="hero-btn" type="submit">Next</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default CreateChama;
