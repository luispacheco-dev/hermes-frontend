import { useState } from "react"
import { useEffect } from "react"
import AddFriend from "./AddFriend.jsx"
import styles from "./Friends.module.css"
import AddIcon from "../../assets/add.svg"
import Searchbar from "../shared/Searchbar.jsx"
import ProfilePic from "../../assets/sample.png"
import DeleteIcon from "../../assets/delete.svg"

/*
 * Friends page
 *
 * @component
 * @returns {JSX.Element} The rendered Friends page
 */

function Friends() {

    const dumbFriendsData = [
        {
            id: 1,
            code: "KAIL9875",
            picture: ProfilePic,
            begin_on: "05/02/2024",
            username: "Luis Enrique Pacheco Torres",
        },
        {
            id: 2,
            code: "K9875IQO",
            picture: ProfilePic,
            begin_on: "04/02/2024",
            username: "John Smith",
        },
    ]

    const [query, setQuery] = useState("")
    const [friends, setFriends] = useState([])
    const [friendsCounter, setFriendsCounter] = useState(0)
    const [filteredFriends, setFilteredFriends] = useState([])
    const [showAddFriendForm, setShowAddFriendForm] = useState(false)

    useEffect(() => {
        setFriends(dumbFriendsData)
        setFilteredFriends(dumbFriendsData)
        setFriendsCounter(dumbFriendsData.length)
    }, [])

    const onChangeQuery = (query) => setQuery(query)
    const toggleAddFriendForm = () => setShowAddFriendForm(!showAddFriendForm)

    return (
        <div className={`${styles.div}`}>
            <div>
                <h6>Friends <span>({friendsCounter})</span></h6>
                <img src={AddIcon} alt="" onClick={toggleAddFriendForm} />
            </div>
            <Searchbar query={query} onChange={onChangeQuery} />
            <div className={`${styles.friend_list}`}>
                {filteredFriends.map((friend) => {
                    return (
                        <div>
                            <div className={`${styles.profile}`}>
                                <img src={friend.picture} alt="" />
                                <div>
                                    <div>
                                        <span>{friend.username}</span>
                                        <span>{friend.begin_on}</span>
                                    </div>
                                    <span>Code: {friend.code}</span>
                                </div>
                            </div>
                            <div className={`${styles.actions}`}>
                                <img src={DeleteIcon} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
            {showAddFriendForm && <AddFriend onClick={toggleAddFriendForm} />}
        </div>
    )
}

export default Friends
