import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateChama from './pages/CreateChama';
import AddMembers from './pages/AddMembers';
import Login from './components/Login';
import Register from './components/Register';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-chama" element={<CreateChama />} />
      <Route path="/add-members" element={<AddMembers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
