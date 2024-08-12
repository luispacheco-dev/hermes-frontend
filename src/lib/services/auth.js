import { setSession } from "../stores/session"

/*
 * login
 *
 * @function
 * @param {Object} data - User's email and password
 */

export async function login(data) {
    if (data.email !== "q@q.com") {
        return {
            success: false,
            error: "Wrong email or password"
        }
    }
    return {
        success: true,
        data: {
            profile_id: 1,
            access: "access",
            refresh: "refresh",
        }
    }
}

export default [login]
