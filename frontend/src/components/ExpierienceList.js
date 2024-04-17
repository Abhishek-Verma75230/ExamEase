import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ExperienceList.css'; 

const ExperienceList = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await axios.get('http://localhost:800/api/experiences');
                setExperiences(response.data);
            } catch (error) {
                console.error('Error fetching experiences:', error);
            }
        };
        fetchExperiences();
    }, []);

    return (
        <div className="scrollable-component">
           
            <div className="container" >
                <h2 className="text-center mb-4 text-white my-3">Interview Experiences</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {experiences.map(experience => (
                        <div className="col" key={experience._id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{experience.title}</h5>
                                    <p className="card-text"><strong>PostedBy:</strong> {experience.user.name}</p>
                                    <p className="card-text"><strong>PostedOn:</strong> {new Date(experience.date).toLocaleDateString()}</p>
                                    <Link to={`/experience/${experience._id}`} className="btn btn-outline-primary">Read Experience</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceList;
