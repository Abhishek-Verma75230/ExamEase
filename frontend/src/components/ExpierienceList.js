

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ExperienceList = () => {
//     const [experiences, setExperiences] = useState([]);

//     useEffect(() => {
//         const fetchExperiences = async () => {
//             try {
//                 const response = await axios.get('http://localhost:800/api/experiences');
//                 setExperiences(response.data);
//             } catch (error) {
//                 console.error('Error fetching experiences:', error);
//             }
//         };
//         fetchExperiences();
//     }, []);
//     const formatDescription = (description) => {
//         return description.replace(/\n/g, '<br>');
//     };

//     return (
//         <div>
//             <h2>Interview Experiences</h2>
//             {experiences.map(experience => (
//                 <div key={experience._id}>
//                     <h3>{experience.title}</h3>
//                     <p dangerouslySetInnerHTML={{ __html: formatDescription(experience.description) }}></p>
//                     <p>User: {experience.user.name}</p>
//                     <p>Date: {new Date(experience.date).toLocaleDateString()}</p>
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ExperienceList;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        <div>
            <h2>Interview Experiences</h2>
            {experiences.map(experience => (
                <div key={experience._id}>
                    <Link to={`/experience/${experience._id}`}>
                        <h3>{experience.title}</h3>
                    </Link>
                    <p>User: {experience.user.name}</p>
                    <p>Date: {new Date(experience.date).toLocaleDateString()}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default ExperienceList;
