import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../config.js';
// import { getToken } from 'auth';
// TODO
function getToken() {
    return '2af296beffd769108dba3795a86cb78758f83936'
}

// human readable date
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
        const fetchMoods = async () => {
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
        };
        fetchMoods();
    }, []);

    return (
        <div>
            {moods.map(mood => (
                <div key={mood.id}>{formatTime(mood.time)}: {mood.mood}</div>
            ))}
        </div>
    );
}

export default Moods;