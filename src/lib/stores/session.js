/*
 * setSession
 *
 * @function
 * @param {Object} payload - Authentication response (access, refresh, etc.)
 * @returns {}
 */

export function setSession(payload) {
    localStorage.setItem("access", payload.access)
    localStorage.setItem("refresh", payload.refresh)
    localStorage.setItem("profile_id", payload.profile_id)
}

/*
 * clearSession
 *
 * @function
 * @returns {}
 */

export function clearSession() {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("profile_id")
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

export function getProfileId() {
    return localStorage.getItem("profile_id")
}

export default [getAccess, setSession, clearSession]
