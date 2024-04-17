import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ExperienceDetail = () => {
    const { id } = useParams();
    const [experience, setExperience] = useState(null);

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await axios.get(`http://localhost:800/api/experiences/${id}`);
                setExperience(response.data);
            } catch (error) {
                console.error('Error fetching experience:', error);
            }
        };
        fetchExperience();
    }, [id]);

    if (!experience) {
        return <div>Loading...</div>;
    }
    const formatDescription = (description) => {
                return description.replace(/\n/g, '<br>');
            };
        
    return (
        // <div>
        //     <h2>{experience.title}</h2>
        //     <p>{experience.description}</p>
        //     <p>User: {experience.user.name}</p>
        //     <p>Date: {new Date(experience.date).toLocaleDateString()}</p>
        // </div>
        <div key={experience._id}>
            <h3>{experience.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: formatDescription(experience.description) }}></p>
            <p>User: {experience.user.name}</p>
            <p>Date: {new Date(experience.date).toLocaleDateString()}</p>
            <hr />
        </div>
    );
};

export default ExperienceDetail;
