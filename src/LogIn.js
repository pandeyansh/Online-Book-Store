import React, { useState } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './components/useAuth';
import './components/Background.css';
function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError(null);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch('http://192.168.68.16:8081/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const userData = await response.json();
        login(userData);
        navigate('/buyer');
      } else {
        const data = await response.json();
        setError(data.message || 'Authentication failed');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('Invalid Login credentials!');
    }
  };
  return (
    <div className='background-container'>
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            placeholder='Username*'
            type="text"
            value={username}
            onChange={handleUsernameChange}
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
        {error && <div className="error-message">{error}</div>}
        <div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className='desc'>
            <p>Not registered yet?</p>
            <Link to='/signup'>
              <a className='link'>
                <p>Create account*</p>
              </a>
            </Link>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}
export default LogIn;