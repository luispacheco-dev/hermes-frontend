import { setSession } from "../stores/session"

/*
 * login
 *
 * @function
 * @param {Object} payload - User's email and password
 */

export function login(payload) {
    setSession(payload)
}

export default [login]
