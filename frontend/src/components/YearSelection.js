
import React from 'react';
import { Link } from 'react-router-dom';
import './YearSelection.css'; 

function YearSelection() {
  return (
    <div className="year-selection-container">
      <h2>Welcome!</h2>
      <p>Select a Year:</p>
      <div className="year-links">
        <Link to="/branches/1" className="year-link">
          <div className="year-card">
            <i className="fas fa-graduation-cap"></i>
            <span>1st Year</span>
          </div>
        </Link>
        <Link to="/branches/2" className="year-link">
          <div className="year-card">
            <i className="fas fa-graduation-cap"></i>
            <span>2nd Year</span>
          </div>
        </Link>
        <Link to="/branches/3" className="year-link">
          <div className="year-card">
            <i className="fas fa-graduation-cap"></i>
            <span>3rd Year</span>
          </div>
        </Link>
        <Link to="/branches/4" className="year-link">
          <div className="year-card">
            <i className="fas fa-graduation-cap"></i>
            <span>4th Year</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default YearSelection;
