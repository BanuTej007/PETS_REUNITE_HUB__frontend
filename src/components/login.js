import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import Navi from './Nav1';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/homepage');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const tableStyle = {
    width: '50%',
    borderRadius: '8px',
    borderCollapse: 'collapse',
    margin: '50px auto'
  };

  const cellStyle = {
    padding: '20px',
    border: '1px solid #ddd',
  };

  return (
    <>
      <Navi />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={cellStyle}>
                <form style={{ display: 'inline-block', width: '100%', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email-address">E-Mail Address:</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password">Password:</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
                    />
                  </div>
                  <br></br>

                  <div style={{ marginBottom: '20px' }}>
                    <button onClick={onLogin} style={{ width: '100%', padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                      Sign In
                    </button>
                    <br></br>
                    <br></br>
                    <NavLink to="/signup" style={{ color: 'blue' }}>
                      New User? Click here.
                    </NavLink>
                  </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Login;
