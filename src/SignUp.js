import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import { Link, useNavigate} from 'react-router-dom';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState(''); // Default role is 'buyer'
  const [error, setError] = useState(null); // State for displaying errors

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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

    // Validate passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Add your signup logic here, such as making an API request
    try {
      const response = await fetch('http://localhost:8081/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role, confirmPassword }),
      });

      if (response.ok) {
        // Successful signup, you can redirect or perform other actions here
        window.alert('Signup successful. Please log in.');
        navigate('/login');
      } else {
        // Handle signup errors, e.g., duplicate email
        const data = await response.json();
        console.error('Signup failed:', data); // Log the error response from the server
        setError(data.error || 'An error occurred during signup.');
      }
    } catch (error) {
      console.error('An error occurred during signup:', error);
      setError('An error occurred during signup.');
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Role:', role);
  };

  return (
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
            value={role}
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
  );
}

export default SignUpForm;
