/**
 * Service: auth
 *
 * Handles token storage and API request header in axios
 */
import axios from 'axios';
import { API_BASE_URL } from '../config.js';

const TOKEN_STORAGE_KEY = 'authToken';
const USERNAME_STORAGE_KEY = 'authUser';
const EMAIL_STORAGE_KEY = 'authEmail';

/**
 * loads the authentication token from localStorage
 *
 * @returns {Object | null} the token, or null if not found
 */
export const loadAuth = () => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    const user = localStorage.getItem(USERNAME_STORAGE_KEY);
    const email = localStorage.getItem(EMAIL_STORAGE_KEY);
    if (token && user && email) {
        return { token, user, email };
    } else {
        return null;
    }
};

/**
 * removes all auth from local storage
 */
export const removeAllAuthFromStorage = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USERNAME_STORAGE_KEY);
    localStorage.removeItem(EMAIL_STORAGE_KEY);
};

/**
 * add user info to local storage
 */
export const storeUserInfo = (token, user, email) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    localStorage.setItem(USERNAME_STORAGE_KEY, user);
    localStorage.setItem(EMAIL_STORAGE_KEY, email);
};

/**
 * sets the Authorization header for axios
 *
 * @param {string} token - token to use
 */
export const setAxiosHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
};

/**
 * clears the Authorization header for axios
 */
export const clearAxiosHeader = () => {
    delete axios.defaults.headers.common['Authorization'];
};

/**
 * authenticates a user using their username and password
 *
 * @param {string} username - username
 * @param {string} password - password
 * @returns {Promise<object>} the user token and details
 */
export const authenticateUser = async (username, password) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/login/`,
            { username, password },
        );

        const {
            token,
            user: { username: authUser, email: authEmail },
        } = response.data;

        storeUserInfo(token, authUser, authEmail);
        setAxiosHeader(token);

        return { token, authUser, authEmail };
    } catch (error) {
        console.error('Authentication failed:', error.response?.data || 'No response');
        return { error: error.response?.data || 'No response' };
    }
};

/**
 * log out
 */
export const logOut = () => {
    clearAxiosHeader();
    removeAllAuthFromStorage();
};