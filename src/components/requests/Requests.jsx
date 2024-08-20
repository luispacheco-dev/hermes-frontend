import { useState } from "react"
import { useEffect } from "react"
import Alert from "../shared/Alert.jsx"
import styles from "./Requests.module.css"
import { parseDateTime } from "../../lib/utils.js"
import { getPictureUrl } from "../../lib/utils.js"
import { deleteFriendRequest, getFriendRequests } from "../../lib/services/profile.js"

/*
 * Requests page
 *
 * @component
 * @returns {JSX.Element} The rendered Requests page
 */

function Requests() {

    const [alert, setAlert] = useState(null)
    const [requests, setRequests] = useState([])
    const [requestsCounter, setRequestsCounter] = useState(0)

    useEffect(() => {
        fetchFriendRequests()
    }, [])

    const fetchFriendRequests = async () => {
        const response = await getFriendRequests()
        if (!response.success) { return }
        setRequests(response.data)
        setRequestsCounter(response.data.length)
    }

    const handleAccept = (id) => {
        setAlert({ success: true, message: "Accepted" + id })
    }
    const handleReject = async (id) => {
        let message = ""
        const response = await deleteFriendRequest(id)

        if (!response.success) {
            message = response.error
        } else {
            message = "Friend Request Deleted"
            const filteredFriendRequests = requests.filter((request) => request.id !== id)
            setRequests(filteredFriendRequests)
            setRequestsCounter(filteredFriendRequests.length)
        }

        setAlert({ success: response.success, message: message })
    }

    return (
        <div className={`${styles.div}`}>
            <h6>Requests <span>({requestsCounter})</span></h6>
            <div className={`${styles.requests}`}>
                {requests.map((request) => {
                    return (
                        <div className={`${styles.request}`}>
                            <div className={`${styles.profile}`}>
                                <img src={getPictureUrl(request.profile.picture)} alt="" />
                                <div>
                                    <div>
                                        <p>{request.profile.username} <span>#{request.profile.code}</span></p>
                                        <span>{parseDateTime(request.requested_at)}</span>
                                    </div>
                                    <span>{request.greetings.length > 50 ? request.greetings.slice(0, 50) + " ..." : request.greetings}</span>
                                </div>
                            </div>
                            <div className={`${styles.actions}`}>
                                <button onClick={() => handleAccept(request.id)}>Accept</button>
                                <button onClick={() => handleReject(request.id)}>Reject</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            {alert && <Alert success={alert.success} message={alert.message} onDismiss={() => setAlert(null)} />}
        </div>
    )
}

export default Requests
