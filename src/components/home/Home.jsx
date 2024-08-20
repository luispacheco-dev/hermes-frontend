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

    const [currentChat, setCurrentChat] = useState(null)

    const onClickChat = (chat) => {
        setCurrentChat(chat)
    }
    const resetCurrentChat = () => {
        setCurrentChat(null)
    }

    return (
        <div className={`${styles.div}`}>
            {!currentChat && <ChatList onClick={onClickChat} />}
            {currentChat && <ChatBox chat={currentChat} onBack={resetCurrentChat} />}
        </div>
    )
}

export default Home
