import React, { useState } from 'react';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import './components/Background.css';
function SignUpForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [roles, setRole] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const response = await fetch('http://192.168.68.16:8081/api/po', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, username, password, roles }),
      });
      if (response.ok) {
        window.alert('Signup successful. Please log in.');
        navigate('/login');
      } else {
        const data = await response.json();
        console.error('Signup failed:', data);
        setError(data.error || 'An error occurred during signup.');
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);
      setError('An error occurred during signup.');
    }
  };
  return (
    <div className='background-container'>
    <div className="login-container">
      <h2 className="login-title">Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            placeholder='Name*'
            type="text"
            value={name}
            onChange={handleNameChange}
            className="form-input"
            required
          />
        </div>
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
        <div className="form-group">
          <label className="form-label">Confirm Password:</label>
          <input
            placeholder='Confirm Password*'
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Role:</label>
          <select
            value={roles}
            onChange={handleRoleChange}
            className="form-input"
            required
          >
            <option value=''>Select Role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
          <div className='desc'>
            <p>Already registered?</p>
            <Link to='/login'>
              <a className='link'>
                <p>Log In</p>
              </a>
            </Link>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}
export default SignUpForm;