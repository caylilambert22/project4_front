import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Registration';
import Forum from './Forum';

import React, { useEffect } from 'react';

import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('https://b01823c2-be9f-4c54-b250-3dc8911e845d-00-6wpjuktw5hky.janeway.replit.dev/api/users').then(response => {
      console.log(response.data);
    }
    )
  },[]); 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;
