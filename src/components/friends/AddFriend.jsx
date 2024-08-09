import styles from "./AddFriend.module.css"
import CloseIcon from "../../assets/add.svg"

/*
 * Add friend component 
 *
 * @component
 * @returns {JSX.Element} The rendered Add friend component
 */

function AddFriend({ onClick, setResponse }) {

    const handleSumbit = (e) => {
        e.preventDefault()
        onClick()
        setResponse({ success: true, message: "Request sended" })
    }

    return (
        <div className={`${styles.div}`}>
            <form className={`${styles.form}`} onSubmit={(e) => handleSumbit(e)}>
                <div>
                    <h6>Add Friend</h6>
                    <img src={CloseIcon} alt="" onClick={onClick} />
                </div>
                <div>
                    <input type="text" placeholder="Code" />
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddFriend
