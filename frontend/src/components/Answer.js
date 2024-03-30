
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Answer() {
    const { id } = useParams();
    const [answerText, setAnswerText] = useState('');
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const token = localStorage.getItem('token');
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
                const response = await axios.get(`http://localhost:800/api/questions/${id}/answers`);
                setAnswers(response.data);
            } catch (error) {
                console.error('Error fetching answers:', error);
            }
        };

        fetchAnswers();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            await axios.post(`http://localhost:800/api/questions/${id}/answers`, { text: answerText });
            setAnswerText('');
            alert('Answer posted successfully!');
            const response = await axios.get(`http://localhost:800/api/questions/${id}/answers`);
            setAnswers(response.data);
        } catch (error) {
            console.error('Error posting answer:', error);
            alert('Error posting answer. Please try again.');
        }
    };

    return (
        <div>
            <div>
                <h2>Reply</h2>
                <ul>
                    {answers.map(answer => (
                        <li key={answer._id}>
                             <h3>PostedBy: {answer.user.name}</h3>
                            <p>{answer.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <textarea value={answerText} onChange={e => setAnswerText(e.target.value)} placeholder="Enter your answer..." required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Answer;
