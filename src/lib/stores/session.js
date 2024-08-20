import { verify } from "../services/auth.js"
import { refreshAccess } from "../services/auth.js"
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

export async function getAccess() {
    let access = localStorage.getItem("access")
    if (!access) { return null }
    if (await verify(access)) { return access }
    const refresh = await getRefresh()
    if (!refresh) { return null }
    const response = await refreshAccess(refresh)
    if (!response.success) { return null }
    access = response.data.access
    localStorage.setItem("access", access)
    return access
}

export async function getRefresh() {
    const refresh = localStorage.getItem("refresh")
    if (!refresh) { return null }
    if (await verify(refresh)) { return refresh }
    return null
}

export function getProfileId() {
    return localStorage.getItem("profile_id")
}

export default [getAccess, setSession, clearSession]
