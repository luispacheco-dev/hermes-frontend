import { useEffect, useState } from "react"
import styles from "./ChatList.module.css"
import ChatListItem from "./ChatListItem.jsx"
import Searchbar from "../shared/Searchbar.jsx"
import { getPictureUrl } from "../../lib/utils.js"
import { getChats } from "../../lib/services/profile.js"

/*
 * Chat list component
 *
 * @component
 * @param {Function} props.onClick - Change current chat id
 * @returns {JSX.Element} The rendered Chat list component
 */

function ChatList({ onClick }) {

    const [query, setQuery] = useState("")
    const [chats, setChats] = useState([])
    const [filteredChats, setFilteredChats] = useState([])
    const [onlineChatsCounter, setOnlineChatsCounter] = useState(0)

    useEffect(() => {
        fetchChats()
    }, [])

    const fetchChats = async () => {
        const response = await getChats()
        if (!response.success) { return }
        setChats(response.data)
        setFilteredChats(response.data)
        setOnlineChatsCounter(response.data.filter((chat) => chat.logged).length)
    }

    const onChangeQuery = (query) => {
        setQuery(query)
        if (query === "") {
            setFilteredChats(chats)
        }
        setFilteredChats(chats.filter((chat) => chat.username.startsWith(query)))
    }

    return (
        <div className={`${styles.div}`}>
            <h6>Chats <span>({onlineChatsCounter} online)</span></h6>
            <Searchbar value={query} onChange={onChangeQuery} />
            <div className={`${styles.chat_list}`}>
                {filteredChats.map((chat) => {
                    return <ChatListItem
                        id={chat.id}
                        key={chat.id}
                        onClick={onClick}
                        active={chat.logged}
                        picture={getPictureUrl(chat.profile.picture)}
                        message={chat.last_message}
                        username={chat.profile.username}
                        nonReadMessages={chat.nrm} />
                })}
            </div>
        </div>
    )
}

export default ChatList
