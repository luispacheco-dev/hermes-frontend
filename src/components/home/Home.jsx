import { useState } from "react"
import ChatBox from "./ChatBox.jsx"
import ChatList from "./ChatList.jsx"
import styles from "./Home.module.css"

/*
 * Home page
 *
 * @component
 * @returns {JSX.Element} The rendered Home page
 */

function Home() {

    const [currentChatId, setCurrentChatId] = useState(0)

    const onClickChat = (id) => {
        setCurrentChatId(id)
    }
    const resetCurrentChat = () => {
        setCurrentChatId(0)
    }

    return (
        <div className={`${styles.div}`}>
            {currentChatId === 0 && <ChatList onClick={onClickChat} />}
            {currentChatId !== 0 && <ChatBox chatId={currentChatId} onBack={resetCurrentChat} />}
        </div>
    )
}

export default Home
