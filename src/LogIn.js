// StyledLoginForm.js

import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';

function StyledLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://192.168.1.30:8081/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Authentication successful
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        // Authentication failed, display an error message
        const data = await response.json();
        setError(data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
          placeholder='Email*'
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
          placeholder='Password*'
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
            required
          />
        </div>
        <div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className='desc'>
            <p>Not registed yet?</p>
            <Link to='/signup'>
            <a className='link'>
              <p>Create account*</p>
            </a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StyledLoginForm;