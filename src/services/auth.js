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
