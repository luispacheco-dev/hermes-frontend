import styles from "./ChatBox.module.css"
import MenuIcon from "../../assets/menu.svg"
import ArrowBackIcon from "../../assets/back.svg"
import { useEffect, useState } from "react"
import { getPictureUrl } from "../../lib/utils"
import { parseDateTime } from "../../lib/utils"
import { getChatMessages, sendMessage } from "../../lib/services/chat"

/*
 * Chat box component (chat)
 *
 * @component
 * @param {number} props.chatId - Chat's id
 * @param {Function} props.onBack - Return to chat list
 * @returns {JSX.Element} The rendered Chat box component
 */

function ChatBox({ chat, onBack }) {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetchMessages()
    }, [])

    const fetchMessages = async () => {
        const response = await getChatMessages(chat.id)
        if (!response.success) { return }
        setMessages(response.data)
    }

    const handleSumbit = async (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))

        const response = await sendMessage(chat.id, data.content)
        if (!response.success) { return }

        e.target.reset()
        setMessages([...messages, response.data])
    }

    return (
        <div className={`${styles.div}`}>
            <div className={`${styles.toolbar}`}>
                <div className={`${styles.profile}`}>
                    <img src={ArrowBackIcon} alt="" onClick={onBack} />
                    <img src={getPictureUrl(chat.profile.picture)} alt="" />
                    <div>
                        <span>{chat.profile.username}</span>
                        <span className={`${chat.profile.logged ? styles.active : styles.non_active}`}>
                            {chat.profile.logged ? "Online" : parseDateTime(chat.profile.last_login) + " last connection"}
                        </span>
                    </div>
                </div>
                <div>
                    <img src={MenuIcon} alt="" />
                </div>
            </div>
            <div className={`${styles.messages}`}>
                {messages.map((message) => {
                    return (
                        <div className={`${message.sender !== chat.profile.id ? styles.from_current_user : ""}`}>
                            <span>{message.content}</span>
                            <span>{parseDateTime(message.created_at)}</span>
                        </div>
                    )
                })}
            </div>
            <form className={`${styles.form}`} onSubmit={(e) => handleSumbit(e)}>
                <input type="text" name="content" placeholder="Say something..." />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ChatBox
