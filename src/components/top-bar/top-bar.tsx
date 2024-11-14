
import styles from "./top-bar.module.css";

function TopBar() {

    return <nav className={styles["top-bar"]}>
        <button>Calendar</button>
        <button>Notes and Todo's</button>
    </nav>

}

export default TopBar;