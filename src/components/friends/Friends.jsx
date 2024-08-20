import { useState } from "react"
import { useEffect } from "react"
import Alert from "../shared/Alert.jsx"
import AddFriend from "./AddFriend.jsx"
import styles from "./Friends.module.css"
import AddIcon from "../../assets/add.svg"
import DeleteFriend from "./DeleteFriend.jsx"
import Searchbar from "../shared/Searchbar.jsx"
import DeleteIcon from "../../assets/delete.svg"
import { parseDateTime } from "../../lib/utils.js"
import { getPictureUrl } from "../../lib/utils.js"
import { getFriends } from "../../lib/services/profile.js"

/*
 * Friends page
 *
 * @component
 * @returns {JSX.Element} The rendered Friends page
 */

function Friends() {

    const [query, setQuery] = useState("")
    const [alert, setAlert] = useState(null)
    const [friends, setFriends] = useState([])
    const [friendsCounter, setFriendsCounter] = useState(0)
    const [filteredFriends, setFilteredFriends] = useState([])
    const [selectedFriend, setSelectedFriend] = useState(null)
    const [showAddFriendForm, setShowAddFriendForm] = useState(false)

    useEffect(() => {
        fetchFriends()
    }, [])

    const fetchFriends = async () => {
        const response = await getFriends()
        if (!response.success) { return }
        setFriends(response.data)
        setFilteredFriends(response.data)
        setFriendsCounter(response.data.length)
    }

    const onChangeQuery = (query) => {
        setQuery(query)
        if (query === "") {
            setFilteredFriends(friends)
        }
        setFilteredFriends(friends.filter((friend) => friend.username.startsWith(query)))
    }

    const onDeleteFriend = (friend) => setSelectedFriend(friend.profile)
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
                        <div key={friend.id}>
                            <div className={`${styles.profile}`}>
                                <img src={getPictureUrl(friend.profile.picture)} alt="" />
                                <div>
                                    <div>
                                        <span>{friend.profile.username}</span>
                                        <span>{parseDateTime(friend.began_at)}</span>
                                    </div>
                                    <span>Code: {friend.profile.code}</span>
                                </div>
                            </div>
                            <div className={`${styles.actions}`}>
                                <img src={DeleteIcon} alt="" onClick={() => onDeleteFriend(friend)} />
                            </div>
                        </div>
                    )
                })}
            </div>
            {showAddFriendForm && <AddFriend onClick={toggleAddFriendForm} setResponse={setAlert} />}
            {alert && <Alert message={alert.message} success={alert.success} onDismiss={() => setAlert(null)} />}
            {selectedFriend && <DeleteFriend friend={selectedFriend} setResponse={setAlert} onDismiss={() => setSelectedFriend(null)} />}
        </div>
    )
}

export default Friends
