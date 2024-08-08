import { useState } from "react"
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
        console.log(id)
        setCurrentChatId(id)
    }

    return (
        <div className={`${styles.div}`}>
            {currentChatId === 0 && <ChatList onClick={onClickChat} />}
        </div>
    )
}

export default Home
