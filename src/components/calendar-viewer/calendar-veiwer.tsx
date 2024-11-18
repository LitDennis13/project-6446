
import styles from "./calendar-viewer.module.css"

import arrowIcon from "../../icons/arrowIcon.svg";


import ViewSelector from "../view-selector/view-selector";

function CalendarViewer() {

    return <div className={styles["calendar-viewer"]}>
        <div className={styles["mini-bar"]}>
            <div className={styles["switcher"]}>
                <button className={styles["arrow-button-back"]}><img src={arrowIcon} alt="Move Calendar Back Button" /></button>
                <button className={styles["today-button"]}>Today</button>
                <button className={styles["arrow-button-forward"]}><img src={arrowIcon} alt="Move Calendar Forward Button" /></button>
            </div>
            
            <p className={styles["info"]}>November 2024</p>

            <div className={styles["view-selection"]}>
                <ViewSelector />
            </div>
        </div>
        <div className={styles["calendar-view-port"]}></div>
    </div>
}

export default CalendarViewer;