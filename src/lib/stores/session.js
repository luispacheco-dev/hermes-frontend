/*
 * getAccess
 *
 * @function
 * @returns {string} The access token
 */

export function getAccess() {
    return localStorage.getItem("access")
}

export default [getAccess]
