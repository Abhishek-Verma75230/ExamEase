// src/components/BranchSelection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Branch.css'; 

function Branch() {
    const { year } = useParams();

    return (
        <div className="branch-selection-container">
            <h2>Select Branch for {year} Year:</h2>
            <div className="branch-links">
                <Link to={`/links/${year}/Computer-Science`} className="branch-link">
                    <div className="branch-card">
                        <span>Computer Science</span>
                    </div>
                </Link>
                <Link to={`/links/${year}/Mechanical`} className="branch-link">
                    <div className="branch-card">
                        <span>Mechanical</span>
                    </div>
                </Link>
                <Link to={`/links/${year}/Electrical`} className="branch-link">
                    <div className="branch-card">
                        <span>Electrical</span>
                    </div>
                </Link>
                <Link to={`/links/${year}/Civil`} className="branch-link">
                    <div className="branch-card">
                        <span>Civil</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Branch;
