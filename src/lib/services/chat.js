import { CHAT_BASE } from "../constants";
import { getAccess } from "../stores/session"

export async function createChat(id) {
    const url = `${CHAT_BASE}/`

    const accessToken = await getAccess()
    const authorization = `Bearer ${accessToken}`

    const payload = {
        friend: id
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
    if (response.status !== 201 && response.status !== 400) {
        return { success: false, error: "Something Goes Wrong" }
    }

    return { success: true, data: "" }
}
