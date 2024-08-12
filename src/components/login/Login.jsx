import styles from "./Login.module.css"
import { useNavigate } from "react-router-dom"
import { login } from "../../lib/services/auth"

/*
 * Login page
 *
 * @component
 * @returns {JSX.Element} The rendered Login page
 */

function Login() {
    const navigate = useNavigate()

    const handleSumbit = (event) => {
        event.preventDefault()
        const payload = {
            profile_id: "1",
            access: "access",
            refresh: "refresh",
        }
        login(payload)
        navigate("/")
    }

    return (
        <div className={`${styles.div}`}>
            <form className={`${styles.form}`} onSubmit={(e) => handleSumbit(e)}>
                <h6>Hermes</h6>
                <span>Don't have an account? <a href="/register">Create an account</a></span>
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
