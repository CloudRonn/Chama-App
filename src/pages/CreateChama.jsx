import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateChama = () => {
  const [chamaName, setChamaName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can save chamaName to context or backend here
    localStorage.setItem('chamaName', chamaName); // for now use localStorage
    navigate('/add-members');
  };

  return (
    <div>
      <h2>Enter Your Chama Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={chamaName}
          onChange={(e) => setChamaName(e.target.value)}
          placeholder="Chama Name"
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default CreateChama;
