import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css';

function Upload() {
    const [formData, setFormData] = useState({
        year: '',
        branch: '',
        topic: '',
        link: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:800/api/upload', formData);
            alert('Data uploaded successfully!');
            setFormData({
                year: '',
                branch: '',
                topic: '',
                link: '',
            });
        } catch (error) {
            console.error('Error uploading data:', error);
            alert('Error uploading data. Please try again.');
        }
    };

    return (
        <div className="upload-form-container">
            <h2>Upload Data</h2>
            <form onSubmit={handleSubmit} className="upload-form">
                <div className="form-group">
                    <label>Year:</label>
                    <input type="text" name="year" value={formData.year} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Branch:</label>
                    <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Topic:</label>
                    <input type="text" name="topic" value={formData.topic} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Link:</label>
                    <input type="text" name="link" value={formData.link} onChange={handleChange} />
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
} 

export default Upload;
