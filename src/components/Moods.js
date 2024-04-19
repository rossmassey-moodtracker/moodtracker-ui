/**
 * Component: Moods
 *
 * Lists all the user's logged moods
 */
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config.js';
import axios from "axios";

/**
 * convert to readable date string
 *
 * @param {string} dateString - the ISO 8601 formatted date
 * @returns a more readable date
 */
function formatTime(dateString) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function Moods() {
    // initialize `moods` to empty array
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        /**
         * call API for list of user's moods
         */
        const fetchMoods = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/moods/`);

                if (response.status === 200) {
                    setMoods(response.data.results);
                }
            } catch (error) {
                console.error('ERROR:', error.message);
            }
        };

        fetchMoods();
    }, []);

    return (
        <div>
            <h1>Moods</h1>
            {moods.map(mood => (
                <div key={mood.id}>{formatTime(mood.time)}: {mood.mood}</div>
            ))}
        </div>
    );
}

export default Moods;