import { AUTH_ENDPOINT } from "../constants"

/*
 * login
 *
 * @function
 * @param {Object} data - User's email and password
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

export default [login]
