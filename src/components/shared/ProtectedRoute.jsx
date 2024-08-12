import { useState } from "react"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { getAccess } from "../../lib/stores/session"

/*
 * Protected route
 *
 * @component
 * @returns {JSX.Element} The rendered route if user is authenticated
 */

function ProtectedRoute() {
    const [isLoading, setIsLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const access = getAccess()
        setIsLoading(false)
        setIsAuthenticated(access ? access : false)
    }, [])

    if (isLoading) {
        return <></>
    }
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute
