import { Outlet } from "react-router-dom";

import styles from "./app-layout.module.css";

import SideBar from "../side-bar/side-bar";
import InfoSettings from "../info-settings/info-settings";
import TopBar from "../top-bar/top-bar";


function AppLayout() {

    return <div className={styles["layout"]}>
        
        <div className={styles["top-bar"]}>
            <TopBar />
        </div>

        <div className={styles["side-bar"]}>
            <SideBar />
        </div>
        <div className={styles["info-settings"]}>
            <InfoSettings/>
        </div>
        <div className={styles["main-content"]}>
            <Outlet />
        </div>
    </div>
}

export default AppLayout;