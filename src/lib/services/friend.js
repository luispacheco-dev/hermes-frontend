import { FRIEND_BASE } from "../constants";
import { getAccess } from "../stores/session.js"
import { getProfileId } from "../stores/session.js"

export async function sendFriendRequest(code, greetings) {
    const id = getProfileId()
    const url = `${FRIEND_BASE}/friend-requests/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const payload = {
        sender: id,
        code: code,
        greetings: greetings ? greetings : "Hellop"
    }
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            Authorization: authorization,
            "Content-Type": "application/json"
        }
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "Already Sended or Code Doesn't Exist" }
    }
    if (response.status !== 201) {
        return { success: false, error: "Something Goes Wrong" }
    }

    return { success: true, data: "" }
}

export async function acceptFriendRequest(sid) {
    const rid = getProfileId()
    const url = `${FRIEND_BASE}/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const payload = {
        sender: sid,
        receiver: rid
    }
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            Authorization: authorization,
            "Content-Type": "application/json"
        }
    }).catch((error) => error)

    if (response.status === 500) {
        return { success: false, error: "Internal Error" }
    }
    if (response.status === 400) {
        return { success: false, error: "Friend Already Exist" }
    }
    if (response.status !== 201) {
        return { success: false, error: "Something Goes Wrong" }
    }

    return { success: true, data: "" }
}
