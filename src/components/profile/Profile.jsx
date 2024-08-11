import styles from "./Profile.module.css"
import { useEffect, useState } from "react"
import ProfilePic from "../../assets/sample.png"

/*
 * Profile page
 *
 * @component
 * @returns {JSX.Element} The rendered Profile page
 */

function Profile() {

    const profileData = {
        id: 1,
        picture: ProfilePic,
        first_name: "Luis Enrique",
        last_name: "Pacheco Torres"
    }

    const [profile, setProfile] = useState({})

    useEffect(() => {
        setProfile(profileData)
    }, [])

    return (
        <div className={`${styles.div}`}>
            <form className={`${styles.form}`}>
                <div>
                    <img src={profile.picture} alt="" />
                    <input type="file" name="picture" />
                </div>
                <input type="text" value={profile.first_name} name="first_name" />
                <input type="text" value={profile.last_name} name="last_name" />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Profile
