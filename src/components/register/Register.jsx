import { useState } from "react"
import Alert from "../shared/Alert.jsx"
import styles from "./Register.module.css"
import { register } from "../../lib/services/profile.js"

/*
 * Register page
 *
 * @component
 * @returns {JSX.Element} The rendered Register page
 */

function Register() {

    const [alert, setAlert] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        let data = Object.fromEntries(new FormData(event.target))
        data = {
            user: { email: data.email, password: data.password },
            profile: { first_name: data.first_name, last_name: data.last_name }
        }
        const response = await register(data)

        if (!response.success) {
            setAlert({ success: response.success, message: response.error })
            return
        }

        event.target.reset()
        setAlert({ success: response.success, message: response.data })
    }

    return (
        <div className={`${styles.div}`}>
            <form className={`${styles.form}`} onSubmit={(e) => handleSubmit(e)}>
                <h6>Create an account</h6>
                <span>Already have an account? <a href="/login">Log in</a></span>
                <input type="text" placeholder="First Name" name="first_name" required maxLength="254" />
                <input type="text" placeholder="Last Name" name="last_name" required maxLength="254" />
                <input type="email" placeholder="Email" name="email" required maxLength="254" />
                <input type="password" placeholder="Password" name="password" required maxLength="8" />
                <button type="submit">Register</button>
            </form>
            {alert && <Alert success={alert.success} message={alert.message} onDismiss={() => setAlert(null)} />}
        </div>
    )
}

export default Register
