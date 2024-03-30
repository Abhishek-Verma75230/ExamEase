


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Discuss() {
  const [questions, setQuestions] = useState([]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    } else {
      fetchQuestions();
    }
  }, [navigate]); 

  const fetchQuestions = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:800/api/questions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:800/api/questions',
        { text: newQuestionText },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNewQuestionText('');
      alert('Question posted successfully!');
      fetchQuestions();
    } catch (error) {
      console.error('Error posting question:', error);
      alert('Error posting question. Please try again.');
    }
  };

  return (
    <div>
      <h2>All Questions</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newQuestionText}
          onChange={(e) => setNewQuestionText(e.target.value)}
          placeholder="Enter your question..."
          required
        ></textarea>
        <button type="submit">Post Question</button>
      </form>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <h3>PostedBy: {question.user.name}</h3>
            <p> {question.text}</p>
            <Link to={`/answer/${question._id}`}>Discuss</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discuss;
