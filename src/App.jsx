import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateChama from './pages/CreateChama';
import AddMembers from './pages/AddMembers';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-chama" element={<CreateChama />} />
      <Route path="/add-members" element={<AddMembers />} />
    </Routes>
  );
};

export default App;
