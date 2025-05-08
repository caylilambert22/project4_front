import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);

    try {
      const response = await axios.post('http://localhost:3003/api/users/login', formData);
      console.log('Login successful:', response.data);

      if (response.status === 200) {
        navigate('/forum');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4 text-center">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">
          Login
        </button>

        <div className="text-center">
          Don't have an account?{' '}
          <Link to="/register" className="return-button btn btn-link p-0 align-baseline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
