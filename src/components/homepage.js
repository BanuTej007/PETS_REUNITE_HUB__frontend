import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import './homepage.css';
function Home() {
  return (
    <div>
      <Nav/>
    <div className="home-container">
      <h1>Welcome to Pets Reunite Hub</h1>
      <br></br>
      <h5>We help missing pets reunite with their owners</h5>
      <p>Choose an option below:</p>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/report-pet" className="navigation-link">
            I have found a pet
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/pets-list" className="navigation-link">
            I have lost a pet
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Home;
