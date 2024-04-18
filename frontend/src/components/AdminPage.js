import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [noticeText, setNoticeText] = useState('');
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {

                const token = localStorage.getItem('token');


                const response = await axios.get('http://localhost:800/api/userData', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });


                setIsAdmin(response.data.isAdmin);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);



    const handleSubmitNotice = async (event) => {
        event.preventDefault();

        try {

            const token = localStorage.getItem('token');


            const response = await axios.post('http://localhost:800/api/notices', { text: noticeText }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });


            setNotices([...notices, response.data]);


            setNoticeText('');
        } catch (error) {
            console.error('Error creating notice:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAdmin) {
        return (
            <div>
                <h1> </h1>
                <h2>warning</h2>
                <h1></h1>
                <p>You do not have permission to access this page.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome Admin!</h1>
            <h2>Important Notices</h2>
            <ul>
                {notices.map((notice, index) => (
                    <li key={index}>{notice.text}</li>
                ))}
            </ul>
            {isAdmin && (
                <form onSubmit={handleSubmitNotice}>
                    <input type="text" value={noticeText} onChange={(event) => setNoticeText(event.target.value)} />
                    <button type="submit">Add Notice</button>
                </form>
            )}
        </div>
    );
};

export default AdminPage;
