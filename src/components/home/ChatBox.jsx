import styles from "./ChatBox.module.css"
import MenuIcon from "../../assets/menu.svg"
import ProfilePic from "../../assets/sample.png"
import ArrowBackIcon from "../../assets/back.svg"

/*
 * Chat box component (chat)
 *
 * @component
 * @param {number} props.chatId - Chat's id
 * @param {Function} props.onBack - Return to chat list
 * @returns {JSX.Element} The rendered Chat box component
 */

function ChatBox({ chatId, onBack }) {

    const userId = 1

    const chat = {
        id: 1,
        picture: ProfilePic,
        active: true,
        lastConnection: "9:30 PM",
        username: "Luis Enrique Pacheco Torres",
        messages: [
            {
                id: 1,
                sender_id: 1,
                content: "Hello man, How are you?",
                sended_on: "9:30 PM"
            },
            {
                id: 2,
                sender_id: 2,
                content: "Hello man!, Great and you how are you being?",
                sended_on: "9:35 PM"
            },
            {
                id: 3,
                sender_id: 1,
                content: "Great thanks",
                sended_on: "9:40 PM"
            },
        ],
    }

    return (
        <div className={`${styles.div}`}>
            <div className={`${styles.toolbar}`}>
                <div className={`${styles.profile}`}>
                    <img src={ArrowBackIcon} alt="" onClick={onBack} />
                    <img src={chat.picture} alt="" />
                    <div>
                        <span>{chat.username}</span>
                        <span className={`${chat.active ? styles.active : styles.non_active}`}>
                            {chat.active ? "Online" : chat.lastConnection + " last connection"}
                        </span>
                    </div>
                </div>
                <div>
                    <img src={MenuIcon} alt="" />
                </div>
            </div>
            <div className={`${styles.messages}`}>
                {chat.messages.map((message) => {
                    return (
                        <div className={`${message.sender_id === userId ? styles.from_current_user : ""}`}>
                            <span>{message.content}</span>
                            <span>{message.sended_on}</span>
                        </div>
                    )
                })}
            </div>
            <form className={`${styles.form}`}>
                <input type="text" name="content" placeholder="Say something..." />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ChatBox
