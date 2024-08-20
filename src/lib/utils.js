import { BASE_URL } from "./constants.js"

export function getPictureUrl(url) {
    return `${BASE_URL}/${url}`
}

export function parseDateTime(timestamp) {
    let time = timestamp.split("T")[1]
    return time.split(".")[0]
}
