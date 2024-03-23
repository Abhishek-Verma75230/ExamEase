import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Pdf from './Pdf';

function Links({  }) {
    const { year, branch } = useParams();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(`http://localhost:800/api/links/${year}/${branch}`);
        setLinks(response.data);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };

    fetchLinks();
  }, [year, branch]);

  return (
    <div>
      <h2>Links for {branch} Branch ({year} Year):</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {/* <a href={link.link} target="_blank" rel="noopener noreferrer">{link.topic}</a> */}
            <Pdf topic={link.topic} link={link.link}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Links;
