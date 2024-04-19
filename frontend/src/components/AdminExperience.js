
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminExperince = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchFalseExperiences = async () => {
            try {
                const token = localStorage.getItem('token');
                const headers = {
                  'Authorization': `Bearer ${token}`
                };
                const response = await axios.get('http://localhost:800/api/falseExperiences',{ headers });
                setExperiences(response.data);
            } catch (error) {
                console.error('Error fetching false experiences:', error);
            }
        };
        fetchFalseExperiences();
    }, []);

    const handleAccept = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
              'Authorization': `Bearer ${token}`
            };
            await axios.put(`http://localhost:800/api/experiences/${id}/accept`,{ headers });
            setExperiences(experiences.filter(exp => exp._id !== id));
        } catch (error) {
            console.error('Error accepting experience:', error);
        }
    };

    const handleDecline = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
              'Authorization': `Bearer ${token}`
            };
            await axios.delete(`http://localhost:800/api/experiences/${id}`,{headers});
            setExperiences(experiences.filter(exp => exp._id !== id));
        } catch (error) {
            console.error('Error declining experience:', error);
        }
    };

    return (
        <div>
            <h2>Admin Panel - Experiences Marked as False</h2>
            {experiences.map(experience => (
                <div key={experience._id}>
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                    <p>User: {experience.user.name}</p>
                    <p>Date: {new Date(experience.date).toLocaleDateString()}</p>
                    <button onClick={() => handleAccept(experience._id)}>Accept</button>
                    <button onClick={() => handleDecline(experience._id)}>Decline</button>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default AdminExperince;
