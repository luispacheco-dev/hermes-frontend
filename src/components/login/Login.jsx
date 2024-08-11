import styles from "./Login.module.css"

/*
 * Login page
 *
 * @component
 * @returns {JSX.Element} The rendered Login page
 */

function Login() {
    return (
        <div className={`${styles.div}`}>
            <form className={`${styles.form}`}>
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
