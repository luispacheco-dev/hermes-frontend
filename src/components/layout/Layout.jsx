import styles from "./Layout.module.css"
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
                <span>Nav here...</span>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
