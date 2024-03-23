import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Discuss() {
  const [questions, setQuestions] = useState([]);
  const [newQuestionText, setNewQuestionText] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:800/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:800/api/questions', { text: newQuestionText });
      setNewQuestionText('');
      alert('Question posted successfully!');
      const response = await axios.get('http://localhost:800/api/questions');
      setQuestions(response.data);
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
        <button type="submit">Send</button>
      </form>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>
            <p>{question.text}</p>
            <Link to={`/answer/${question._id}`}>Reply</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Discuss;
