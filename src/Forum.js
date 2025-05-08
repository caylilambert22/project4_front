import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Forum.css';

function ForumPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Get all your information here!</a>
          <div className="d-flex">
            <span className="navbar-text me-3">Welcome!</span>
            <button className="logout btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h2>Forum Discussions</h2>
      </div>
    </div>
  );
}

export default ForumPage;
