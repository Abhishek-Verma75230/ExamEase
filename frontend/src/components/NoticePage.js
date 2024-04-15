import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
       
        const token = localStorage.getItem('token');
  
      
        const response = await axios.get('http://localhost:800/api/getnotices', {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
  
        
        setNotices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };
  
    fetchNotices();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Notices</h1>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>{notice.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoticesPage;
