import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { logout } from "../../lib/services/auth"
import { clearSession } from "../../lib/stores/session"

/*
 * Logout page
 *
 * @component
 * @returns {JSX.Element} The rendered Logout page
 */

function Logout() {

    useEffect(() => {
        handleLogout()
        clearSession()
    }, [])

    const handleLogout = async () => {
        const response = await logout()
        if (!response.success) { console.log(response.error) }
    }

    return <Navigate to="/login" replace />
}

export default Logout
