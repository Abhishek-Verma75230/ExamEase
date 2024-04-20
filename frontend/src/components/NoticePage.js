
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImportantNoticePage = () => {
  const [topNotices, setTopNotices] = useState([]);
  const [allNotices, setAllNotices] = useState([]);

  useEffect(() => {
    const fetchTopNotices = async () => {
      try {
        const response = await axios.get('http://localhost:800/api/notices/top');
        setTopNotices(response.data);
      } catch (error) {
        console.error('Error fetching top notices:', error);
      }
    };

    const fetchAllNotices = async () => {
      try {
        const response = await axios.get('http://localhost:800/api/notices');
        setAllNotices(response.data);
      } catch (error) {
        console.error('Error fetching all notices:', error);
      }
    };

    fetchTopNotices();
    fetchAllNotices();
  }, []);

  return (
    <div className="notice-page row">
      {/* yaha par top vali notices aengi css likhte  time par ye vala container left side me rakhna card banakar */}
      <div className="top-notices-container col">
        <h2>Top Notices</h2>
        <div className="notice-cards">
          {topNotices.map(notice => (
            <div key={notice.id} className="notice-card">
              <h3>{notice.title}</h3>
              <p>{notice.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="all-notices-container col">
        {/* yaha par sari notices aengi css likhte time par ise rigth me rakhna */}
        <h2>All Notices</h2>
        <div className="notice-list">
          {allNotices.map(notice => (
            <div key={notice.id} className="notice">
              <h3>{notice.title}</h3>
              <p>{notice.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantNoticePage;
