import styles from "./ChatListItem.module.css"

/*
 * Chat list item component
 *
 * @component
 * @param {number} props.id - Chat's id
 * @param {string} props.username - User's name
 * @param {string} props.picture - User's picture
 * @param {boolean} props.active - User's online status 
 * @param {Object} props.message - Latest chat's message
 * @param {Function} props.onClick - Set current chat id
 * @param {number} props.nonReadMessages - Number of non read messages
 * @returns {JSX.Element} The rendered Chat list item component
 */

function ChatListItem({ id, username, picture, active, message, onClick, nonReadMessages }) {
    return (
        <div className={`${styles.div}`} onClick={() => onClick(id)}>
            <div className={`${styles.chat_data}`}>
                <img src={picture} alt="" />
                <div>
                    <div className={`${styles.message_sender}`}>
                        <span>{username}</span>
                        <span>{message.created_at}</span>
                    </div>
                    <div className={`${styles.message_content}`}>
                        <span className={`${nonReadMessages !== 0 ? styles.focus : ""}`}>
                            {message.content.length > 50 ? message.content.slice(0, 50) + " ..." : message.content}
                        </span>
                        {nonReadMessages !== 0 && <span className={`${styles.nrm}`}>{nonReadMessages}</span>}
                    </div>
                </div>
            </div>
            <div className={`${styles.chat_status}`}>
                <span className={`${active ? styles.online : styles.offline}`}>{active ? "Online" : "Offline"}</span>
            </div>
        </div>
    )
}

export default ChatListItem
