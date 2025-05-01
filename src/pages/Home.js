import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h2 className="home-title">Welcome to Student Manager</h2>
        <p className="home-description">
          Streamline your student team management with ease and efficiency.
        </p>
        <div className="home-buttons">
          <Link to="/add" className="btn primary-btn">Add Member</Link>
          <Link to="/members" className="btn secondary-btn">View Members</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
