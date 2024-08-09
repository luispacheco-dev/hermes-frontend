import styles from "./Alert.module.css"
import CloseIcon from "../../assets/add.svg"

/*
 * Alert component
 *
 * @component
 * @param {boolean} props.success - Action success
 * @param {string} props.message - Alert's message
 * @param {Function} props.onDismiss - Dismiss alert
 * @returns {JSX.Element} The rendered Alert component
 */

function Alert({ success, message, onDismiss }) {
    return (
        <div className={`${styles.div}`}>
            <div className={`${success ? styles.success : ""}`}>
                <p>{success ? "Success: " : "Error: "} <span>{message}</span></p>
                <img src={CloseIcon} alt="" onClick={onDismiss} />
            </div>
        </div>
    )
}

export default Alert
