import { BASE_URL } from "./constants.js"

export function getPictureUrl(url) {
    return `${BASE_URL}/${url}`
}
