import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { clearSession } from "../../lib/stores/session"

/*
 * Logout page
 *
 * @component
 * @returns {JSX.Element} The rendered Logout page
 */

function Logout() {

    useEffect(() => {
        clearSession()
    }, [])

    return <Navigate to="/login" replace />
}

export default Logout
