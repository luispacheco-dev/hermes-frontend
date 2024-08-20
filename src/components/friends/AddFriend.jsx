import styles from "./AddFriend.module.css"
import CloseIcon from "../../assets/add.svg"
import { sendFriendRequest } from "../../lib/services/friend"

/*
 * Add friend component 
 *
 * @component
 * @returns {JSX.Element} The rendered Add friend component
 */

function AddFriend({ onClick, setResponse }) {

    const handleSumbit = async (e) => {
        e.preventDefault()
        let message = ""
        let success = false
        const data = Object.fromEntries(new FormData(e.target))

        const response = await sendFriendRequest(data.code, data.greetings)
        if (response.success) {
            success = true
            message = "Friend Request Sended"
        } else {
            success = false
            message = response.error
        }

        onClick()
        setResponse({ success: success, message: message })
    }

    return (
        <div className={`${styles.div}`}>
            <form className={`${styles.form}`} onSubmit={(e) => handleSumbit(e)}>
                <div>
                    <h6>Add Friend</h6>
                    <img src={CloseIcon} alt="" onClick={onClick} />
                </div>
                <div>
                    <input name="code" type="text" placeholder="Code" />
                    <input name="greetings" type="textarea" placeholder="Greatings..." />
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddFriend
