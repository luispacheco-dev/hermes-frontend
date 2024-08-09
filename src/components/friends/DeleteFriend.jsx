import CloseIcon from "../../assets/add.svg"
import styles from "./DeleteFriend.module.css"

/*
 * Delete friend component
 *
 * @component
 * @param {Object} props.friend - Friend's data
 * @param {Function} props.onDismiss - Dismiss prompt
 * @param {Function} props.setResponse - Retrive response to delete action
 * @returns {JSX.Element} The rendered Delete friend component
 */

function DeleteFriend({ friend, onDismiss, setResponse }) {

    const handleDelete = () => {
        setResponse({ success: true, message: "Deleted" })
        onDismiss()
    }

    return (
        <div className={`${styles.div}`}>
            <div>
                <div className={`${styles.header}`}>
                    <span>Are you sure?</span>
                    <img src={CloseIcon} alt="" onClick={onDismiss} />
                </div>
                <div className={`${styles.friend}`}>
                    <img src={friend.picture} alt="" />
                    <div>
                        <span>{friend.username}</span>
                    </div>
                </div>
                <div className={`${styles.actions}`}>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteFriend
