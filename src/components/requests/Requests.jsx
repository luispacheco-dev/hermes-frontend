import { useState } from "react"
import { useEffect } from "react"
import Alert from "../shared/Alert.jsx"
import styles from "./Requests.module.css"
import ProfilePic from "../../assets/sample.png"

/*
 * Requests page
 *
 * @component
 * @returns {JSX.Element} The rendered Requests page
 */

function Requests() {

    const requestsData = [
        {
            id: 1,
            code: "CFLS3201",
            picture: ProfilePic,
            sended_on: "9:30 PM",
            greatings: "Hey man, is me!",
            username: "Luis Enrique Pacheco Torres",
        },
        {
            id: 2,
            code: "3201CFLS",
            picture: ProfilePic,
            sended_on: "9:20 PM",
            username: "John Smith",
            greatings: "Hey man, is me! aaa aaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaa aaaaaaaaaaaaa",
        },
    ]

    const [alert, setAlert] = useState(null)
    const [requests, setRequests] = useState([])
    const [requestsCounter, setRequestsCounter] = useState(0)

    useEffect(() => {
        setRequests(requestsData)
        setRequestsCounter(requestsData.length)
    }, [])

    const handleAccept = (id) => {
        setAlert({ success: true, message: "Accepted" + id })
    }
    const handleReject = (id) => {
        setAlert({ success: false, message: "Rejected" + id })
    }

    return (
        <div className={`${styles.div}`}>
            <h6>Requests <span>({requestsCounter})</span></h6>
            <div className={`${styles.requests}`}>
                {requests.map((request) => {
                    return (
                        <div className={`${styles.request}`}>
                            <div className={`${styles.profile}`}>
                                <img src={request.picture} alt="" />
                                <div>
                                    <div>
                                        <p>{request.username} <span>#{request.code}</span></p>
                                        <span>{request.sended_on}</span>
                                    </div>
                                    <span>{request.greatings.length > 50 ? request.greatings.slice(0, 50) + " ..." : request.greatings}</span>
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
