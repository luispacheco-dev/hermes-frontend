import { useEffect, useState } from "react"
import styles from "./ChatList.module.css"
import ChatListItem from "./ChatListItem.jsx"
import Searchbar from "../shared/Searchbar.jsx"
import ProfilePic from "../../assets/sample.png"

/*
 * Chat list component
 *
 * @component
 * @param {Function} props.onClick - Change current chat id
 * @returns {JSX.Element} The rendered Chat list component
 */

function ChatList({ onClick }) {

    const dumbChatsData = [
        {
            id: 1,
            username: "Luis Enrique Pacheco Torres",
            message: {
                sended_on: "9:30 PM",
                content: "Hello man"
            },
            active: true,
            picture: ProfilePic,
            nonReadMessages: 10
        },
        {
            id: 2,
            username: "John Smith",
            message: {
                sended_on: "7:30 PM",
                content: "Hello man, How are you aaasjhjssis skshdnj, aikjdij aksk, kjkdjijs, kjsijd ksjiosj"
            },
            active: false,
            picture: ProfilePic,
            nonReadMessages: 0
        },
    ]

    const [query, setQuery] = useState("")
    const [chats, setChats] = useState([])
    const [filteredChats, setFilteredChats] = useState([])
    const [onlineChatsCounter, setOnlineChatsCounter] = useState(0)

    useEffect(() => {
        setChats(dumbChatsData)
        setFilteredChats(dumbChatsData)
        setOnlineChatsCounter(dumbChatsData.filter((chat) => chat.active).length)
    }, [])

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
                        active={chat.active}
                        picture={chat.picture}
                        message={chat.message}
                        username={chat.username}
                        nonReadMessages={chat.nonReadMessages} />
                })}
            </div>
        </div>
    )
}

export default ChatList
