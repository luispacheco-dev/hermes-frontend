import { PROFILE_BASE } from "../constants"

/*
 * register
 * 
 * @function
 * @param {Object} payload - User's data
 */

export async function register(payload) {
    const url = `${PROFILE_BASE}`

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "The email is already taken" }
    }
    if (response.status !== 201) {
        console.log(await response.json())
        return { success: false, error: "Something goes wrong" }
    }

    return { success: true, data: "Account created" }
}
