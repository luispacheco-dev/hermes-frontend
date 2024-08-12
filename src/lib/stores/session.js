/*
 * setSession
 *
 * @function
 * @param {Object} payload - Authentication response (access, refresh, etc.)
 */

export function setSession(payload) {
    localStorage.setItem("access", payload.access)
    localStorage.setItem("refresh", payload.refresh)
    localStorage.setItem("profile_id", payload.profile_id)
}

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
