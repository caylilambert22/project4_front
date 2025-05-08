import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Registration';
import Forum from './Forum';

import React, { useEffect } from 'react';

import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('http://localhost:3003/api/users').then(response => {
      console.log(response.data);
    }
    )
  } ) 
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<h1>Welcome to the App!</h1>} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;
