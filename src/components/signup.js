import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import Navi from './Nav1'; // Import the Navi component from code 2

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Navi /> {/* Include the Navi component for navigation */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <form style={{ display: 'inline-block', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email-address">Email address</label>
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            style={{
              width: '100%',
              padding: '10px',
              boxSizing: 'border-box',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Sign up
          </button>
        </form>

        <p>
          Already have an account?{' '}
          <NavLink to="/">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
