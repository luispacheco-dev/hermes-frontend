import styles from "./Register.module.css"

/*
 * Register page
 *
 * @component
 * @returns {JSX.Element} The rendered Register page
 */

function Register() {
    return (
        <div className={`${styles.div}`}>
            <form className={`${styles.form}`}>
                <h6>Create an account</h6>
                <span>Already have an account? <a href="/login">Log in</a></span>
                <input type="text" placeholder="First Name" name="first_name" />
                <input type="text" placeholder="Last Name" name="last_name" />
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
