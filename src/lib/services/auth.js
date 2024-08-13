import { AUTH_ENDPOINT } from "../constants"
import { getAccess } from "../stores/session"

/*
 * login
 *
 * @function
 * @param {Object} payload - User's email and password
 */

export async function login(payload) {
    const url = `${AUTH_ENDPOINT}/token/`

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Somenthing goes wrong" }
    }
    if (response.status === 400) {
        return { success: false, error: "Wrong email or password" }
    }

    const data = await response.json()
    return { success: true, data: data }
}

/*
 * register
 * 
 * @function
 * @param {Object} payload - User's data
 */

export async function register(payload) {
    const url = `${AUTH_ENDPOINT}/register/`

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Somenthing goes wrong" }
    }
    if (response.status === 400) {
        return { success: false, error: "The email is already taken" }
    }

    return { success: true, data: "Account created" }
}

export async function logout() {
    const url = `${AUTH_ENDPOINT}/logout/`

    const accessToken = getAccess()
    console.log(accessToken)
    const headers = { Authorization: `Bearer ${getAccess()}` }

    const response = await fetch(url, { headers: headers }).catch((error) => error)

    if (response.status !== 200) {
        return { success: false, error: "Somenthing goes wrong" }
    }

    return { success: true, data: "Logout" }
}

export default [login]
