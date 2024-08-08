import styles from "./Searchbar.module.css"

/*
 * Search bar component
 *
 * @component
 * @param {string} props.query - Search value
 * @param {Function} props.onChange - Update search value
 * @returns {JSX.Element} The rendered Search bar component
 */

function Searchbar({ query, onChange }) {
    return (
        <input
            type="text"
            value={query}
            placeholder="Search by name"
            className={`${styles.input}`}
            onChange={(e) => onChange(e.target.value)} />
    )
}

export default Searchbar
