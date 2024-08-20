import styles from "./Profile.module.css"
import { useEffect, useState } from "react"
import { getPictureUrl } from "../../lib/utils.js"
import { getProfile } from "../../lib/services/profile.js"
import { updateProfile } from "../../lib/services/profile.js"

/*
 * Profile page
 *
 * @component
 * @returns {JSX.Element} The rendered Profile page
 */

function Profile() {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async () => {
        const response = await getProfile()
        if (!response.success) { return }
        setProfile(response.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await updateProfile(formData)
        if (!response.success) { return }
        window.location.reload()
    }

    const handleLastName = (e) => {
        setProfile({ ...profile, last_name: e.target.value })
    }

    const handleFirstName = (e) => {
        setProfile({ ...profile, first_name: e.target.value })
    }

    return (
        <div className={`${styles.div}`}>
            <form className={`${styles.form}`} onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <span>Friend Code: {profile.code}</span>
                    <img src={getPictureUrl(profile.picture)} alt="" />
                    <input type="file" name="picture" />
                </div>
                <input type="text" value={profile.first_name} name="first_name" onChange={(e) => handleFirstName(e)} />
                <input type="text" value={profile.last_name} name="last_name" onChange={(e) => handleLastName(e)} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default Profile
