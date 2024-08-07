import styles from "./Layout.module.css"
import Navbar from "../shared/Navbar.jsx";
import { Outlet } from "react-router-dom";

/*
 * Layout page
 *
 * @component
 * @returns {JSX.Element} The rendered Layout page
 */

function Layout() {
    return (
        <div className={`${styles.div}`}>
            <div className={`${styles.container}`}>
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
