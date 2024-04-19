/**
 * Service: auth
 *
 * Handles token storage and API request header in axios
 */
import axios from "axios";

const TOKEN_STORAGE_KEY = 'authToken';

/**
 * stores the authentication token in localStorage
 *
 * @param {string} token - the token
 */
export const setToken = (token) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

/**
 * gets the authentication token from localStorage
 *
 * @returns {string | null} the token, or null if not found
 */
export const getToken = () => {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
};

/**
 * removes the authentication token from localStorage
 */
export const removeToken = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
};

/**
 * add token to header
 */
export const setAxiosAuthToken = (token) => {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
};

