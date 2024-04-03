/**
 * Component: Moods
 * 
 * Description:
 * Lists all the user's logged moods
 * 
 * Example Usage:
 * <Moods />
 */
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config.js';
// import { getToken } from 'auth';
// TODO
function getToken() {
    return '11356283f5bf9152bd4abc5d376868cfb9c50f64'
}

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
                // call API with token for user's moods
                const token = getToken();
                const response = await fetch(`${API_BASE_URL}/moods/`, {
                    headers: { 'Authorization': `Token ${token}` }
                });
    
                // set moods if API call success
                if (response.ok) {
                    const data = await response.json()
                    setMoods(data.results)
                }
            } catch (error) {
                console.error('ERROR:', error.message);
            }
        };
        fetchMoods();
    }, []);

    return (
        <div>
            {moods.map(mood => (
                <div key={mood.id}>{mood.time}: {mood.mood}</div>
            ))}
        </div>
    );
}

export default Moods;