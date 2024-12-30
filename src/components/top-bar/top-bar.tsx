import styles from "./top-bar.module.css";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/state";

import { ChangeView } from "../../state/global-state/app-view/app-view-slice";

function TopBar() {
    const dispatch = useDispatch<AppDispatch>();

    function setCalendarView(): void {
        dispatch(ChangeView("calendar"));
    }

    function setNoteTodoView(): void {
        dispatch(ChangeView("notestodo"));
    }


    return <nav className={styles["top-bar"]}>
        <button onClick={setCalendarView}>Calendar</button>
        <button onClick={setNoteTodoView}>Notes and Todo's</button>
    </nav>

}

export default TopBar;