import { useState } from "react"
import styles from "./Login.module.css"
import Alert from "../shared/Alert.jsx"
import { useNavigate } from "react-router-dom"
import { login } from "../../lib/services/auth"
import { setSession } from "../../lib/stores/session.js"

/*
 * Login page
 *
 * @component
 * @returns {JSX.Element} The rendered Login page
 */

function Login() {
    const navigate = useNavigate()
    const [alert, setAlert] = useState(null)

    const handleSumbit = async (event) => {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target))
        const response = await login(data)
        if (!response.success) {
            setAlert({ success: response.success, message: response.error })
            return
        }
        setSession(response.data)
        navigate("/")
    }

    return (
        <div className={`${styles.div}`}>
            <form className={`${styles.form}`} onSubmit={(e) => handleSumbit(e)}>
                <h6>Hermes</h6>
                <span>Don't have an account? <a href="/register">Create an account</a></span>
                <input type="email" placeholder="Email" name="email" required maxLength="254" />
                <input type="password" placeholder="Password" name="password" required maxLength="8" />
                <button type="submit">Login</button>
            </form>
            {alert && <Alert success={alert.success} message={alert.message} onDismiss={() => setAlert(null)} />}
        </div>
    )
}

export default Login
