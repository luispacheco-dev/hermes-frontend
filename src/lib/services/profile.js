import { PROFILE_BASE } from "../constants"
import { getAccess, getProfileId } from "../stores/session"

/*
 * register
 * 
 * @function
 * @param {Object} payload - User's data
 */

export async function register(payload) {
    const url = `${PROFILE_BASE}/`

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

export async function updateLogged(logged) {
    const id = getProfileId()
    const url = `${PROFILE_BASE}/${id}/logged/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const response = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ logged: logged }),
        headers: {
            Authorization: authorization,
            "Content-Type": "application/json"
        }
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "Logged Field Is Required" }
    }
    if (response.status !== 200) {
        console.log(await response.json())
        return { success: false, error: "Something goes wrong" }
    }

    return { success: true, data: "" }
}

export async function getProfile() {
    const id = getProfileId()
    const url = `${PROFILE_BASE}/${id}/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const response = await fetch(url, {
        headers: { Authorization: authorization }
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "Profile Doesn't Exist" }
    }
    if (response.status !== 200) {
        console.log(await response.json())
        return { success: false, error: "Something goes wrong" }
    }

    const data = await response.json()
    return { success: true, data: data }
}

export async function updateProfile(formData) {
    const id = getProfileId()
    const url = `${PROFILE_BASE}/${id}/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const response = await fetch(url, {
        method: "PATCH",
        body: formData,
        headers: {
            Authorization: authorization
        }
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "Profile Doesn't Exist" }
    }
    if (response.status !== 200) {
        console.log(await response.json())
        return { success: false, error: "Something goes wrong" }
    }

    const data = await response.json()
    return { success: true, data: data }
}

export async function getChats() {
    const id = getProfileId()
    const url = `${PROFILE_BASE}/${id}/chats/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const response = await fetch(url, {
        headers: { Authorization: authorization }
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "Profile Doesn't Exist" }
    }
    if (response.status !== 200) {
        console.log(await response.json())
        return { success: false, error: "Something goes wrong" }
    }

    const data = await response.json()
    return { success: true, data: data }
}

export async function getFriendRequests() {
    const id = getProfileId()
    const url = `${PROFILE_BASE}/${id}/friend-requests/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const response = await fetch(url, {
        headers: { Authorization: authorization }
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "Profile Doesn't Exist" }
    }
    if (response.status !== 200) {
        console.log(await response.json())
        return { success: false, error: "Something goes wrong" }
    }

    const data = await response.json()
    return { success: true, data: data }
}

export async function deleteFriendRequest(rid) {
    const pid = getProfileId()
    const url = `${PROFILE_BASE}/${pid}/friend-requests/${rid}/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const response = await fetch(url, {
        method: "DELETE",
        headers: { Authorization: authorization }
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "Profile/Friend Request Doesn't Exist" }
    }
    if (response.status !== 200) {
        return { success: false, error: "Something Goes Wrong" }
    }

    return { success: true, data: "" }
}

export async function getFriends() {
    const id = getProfileId()
    const url = `${PROFILE_BASE}/${id}/friends/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const response = await fetch(url, {
        headers: { Authorization: authorization }
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "Profile Doesn't Exist" }
    }
    if (response.status !== 200) {
        console.log(await response.json())
        return { success: false, error: "Something goes wrong" }
    }

    const data = await response.json()
    return { success: true, data: data }
}
