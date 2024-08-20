import CloseIcon from "../../assets/add.svg"
import styles from "./DeleteFriend.module.css"
import { getPictureUrl } from "../../lib/utils"
import { deleteFriend } from "../../lib/services/friend"

/*
 * Delete friend component
 *
 * @component
 * @param {Object} props.friend - Friend's data
 * @param {Function} props.onDismiss - Dismiss prompt
 * @param {Function} props.setResponse - Retrive response to delete action
 * @returns {JSX.Element} The rendered Delete friend component
 */

function DeleteFriend({ friend, onDismiss, setResponse, onSuccess }) {

    const handleDelete = async (id) => {
        let message = ""
        const response = await deleteFriend(id)

        if (!response.success) {
            message = response.error
        } else {
            message = "Friend Deleted"
            onSuccess(id)
        }
        setResponse({ success: response.success, message: message })
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
                    <img src={getPictureUrl(friend.profile.picture)} alt="" />
                    <div>
                        <span>{friend.profile.username}</span>
                    </div>
                </div>
                <div className={`${styles.actions}`}>
                    <button onClick={() => handleDelete(friend.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteFriend
