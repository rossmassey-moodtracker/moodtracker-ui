/**
 * Component: Moods
 *
 * Handles mood logic
 */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config.js';
import { Paper, Typography } from '@mui/material';
import MoodsTable from './MoodsTable';

function Moods() {
    const [moods, setMoods] = useState([]);
    const [newMood, setNewMood] = useState('');

    useEffect(() => {
        const fetchMoods = async () => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/api/moods/`);
                if (response.status === 200) {
                    setMoods(response.data.results);
                }
            } catch (error) {
                console.error('ERROR:', error.message);
            }
        };

        fetchMoods();
    }, []);

    const handleMoodChange = (event) => {
        setNewMood(event.target.value);
    };

    const handleMoodSubmit = async () => {
        try {
            const response = await axios.post(
                `${API_BASE_URL}/api/moods/`,
                { mood: newMood });
            if (response.status === 201) {
                setMoods([...moods, response.data]); // insert new mood
                setNewMood(''); // clear input field
            }
        } catch (error) {
            console.error('Failed to post new mood:', error.message);
        }
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Typography variant="h4" sx={{ m: 2 }}>Moods</Typography>
            <MoodsTable moods={moods}
                        newMood={newMood}
                        onMoodChange={handleMoodChange}
                        onMoodSubmit={handleMoodSubmit}/>
        </Paper>
    );
}

export default Moods;
