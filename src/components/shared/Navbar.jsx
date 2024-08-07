import styles from "./Navbar.module.css"
import ProfilePic from "../../assets/sample.png"
import LogoutIcon from "../../assets/logout.svg"
import RequestsIcon from "../../assets/inbox.svg"
import FriendsIcon from "../../assets/friends.svg"
import ProfileIcon from "../../assets/profile.svg"
import DropdownIcon from "../../assets/dropdown.svg"
import { useState } from "react"

/*
 * Nav bar component
 *
 * @component
 * @returns {JSX.Element} The rendered Nav bar component
 */

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => { setShowMenu(!showMenu) }

    return (
        <nav className={`${styles.nav}`}>
            <h6>Hermes</h6>
            <ul className={`${styles.nav_menu}`}>
                <li>
                    <img src={FriendsIcon} alt="" />
                    <a href="/friends">Friends</a>
                </li>
                <li>
                    <img src={RequestsIcon} alt="" />
                    <a href="/requests">Requests</a>
                </li>
            </ul>
            <div className={`${styles.profile_container} ${!showMenu ? styles.collapse : ""}`}>
                <div className={`${styles.profile}`} onClick={toggleMenu}>
                    <img src={ProfilePic} alt="" />
                    <span>Hi, Luis Enrique</span>
                    <img className={`${showMenu ? styles.rotate : ""}`} src={DropdownIcon} alt="" />
                </div>
                <ul className={`${styles.profile_menu}`}>
                    <li>
                        <img src={ProfileIcon} alt="" />
                        <a href="/profile">Profile</a>
                    </li>
                    <li>
                        <img src={LogoutIcon} alt="" />
                        <a href="/logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
