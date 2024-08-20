import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { clearSession } from "../../lib/stores/session"
import { updateLogged } from "../../lib/services/profile.js"

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
        const response = await updateLogged(false)
        if (!response.success) { console.log(response.error) }
    }

    return <Navigate to="/login" replace />
}

export default Logout
