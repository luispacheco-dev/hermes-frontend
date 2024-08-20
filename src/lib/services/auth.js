import { AUTH_BASE } from "../constants"
import { getAccess } from "../stores/session"

/*
 * login
 *
 * @function
 * @param {Object} payload - User's email and password
 */

export async function login(payload) {
    const url = `${AUTH_BASE}/token/`

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 401) {
        return { success: false, error: "Wrong email or password" }
    }
    if (response.status !== 200) {
        console.log(await response.json())
        return { success: false, error: "Something goes wrong" }
    }

    const data = await response.json()
    return { success: true, data: data }
}

export async function verify(token) {
    const url = `${AUTH_BASE}/token/verify/`

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ token: token }),
        headers: { "Content-Type": "application/json" },
    }).catch((error) => error)

    if (response.status !== 200) {
        return false
    }

    return true
}

export async function refreshAccess(token) {
    const url = `${AUTH_BASE}/token/refresh/`

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ refresh: token }),
        headers: { "Content-Type": "application/json" },
    }).catch((error) => error)

    if (response.status !== 200) {
        return { success: false }
    }

    const data = await response.json()
    return { success: true, data: data }
}

export default [login]
