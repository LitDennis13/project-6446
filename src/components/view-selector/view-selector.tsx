import styles from "./view-selector.module.css";

import ThreeDayIcon from "../../icons/threedayViewIcon.svg";
import DayViewIcon from "../../icons/dayViewIcon.svg";
import WorkDaysIcon from "../../icons/workdaysView.svg";
import MonthIcon from "../../icons/monthViewIcon.svg";
import WeekViewIcon from "../../icons/weekViewIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/state";
import { ChangeMode, SetCurrentView } from "../../state/global-state/change-view-slice";

function putOptionAtBeginning(arr: string[], option: string): string[] {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === option) {
            arr.splice(i, 1);
        }
    }
    arr.unshift(option)
    return arr;
}

function getViewOption(view: string): JSX.Element {
    let returnValue = <></>;
    switch (view) {
        case "Day": {
            returnValue = <><img src={DayViewIcon} />Day</>;
            break;
        }
        case "ThreeDay": {
            returnValue = <><img src={ThreeDayIcon} />Three Day</>;
            break;
        }
        case "WorkWeek": {
            returnValue = <><img src={WorkDaysIcon} />Work Week</>;
            break;
        }
        case "Week": {
            returnValue = <><img src={WeekViewIcon} />Week</>;
            break;
        }
        default: {
            returnValue = <><img src={MonthIcon} />Month</>;
            break;
        }
    }
    return returnValue;
}

function setNewViewOption(option: string, dispatcher: AppDispatch): void {
    dispatcher(SetCurrentView(option));
    dispatcher(ChangeMode(false));
}

function displayAllViewOptions(currentView: string, dispatcher: AppDispatch): JSX.Element {
    let allViewOptions = ["Day", "ThreeDay", "WorkWeek", "Week", "Month"];
    allViewOptions = putOptionAtBeginning(allViewOptions, currentView);
    return <div className={styles["view-selector"]}>
        {allViewOptions.map((option, index) => {
            return <button key={"Option"+index} className={styles["view-display-on-selector"]} onClick={() => {setNewViewOption(option, dispatcher)}}> {getViewOption(option)} </button>
        })}
    </div>;
}

function ViewSelector() {
    const currentView = useSelector((state: RootState) => state.viewSelection.currentView);
    const selectMode = useSelector((state: RootState) => state.viewSelection.selector);
    const dispatch = useDispatch<AppDispatch>();
    

    return <div onMouseOver={() => dispatch(ChangeMode(true))} onMouseLeave={() => dispatch(ChangeMode(false))}>
        {!selectMode && <button className={styles["view-display"]} onClick={() => dispatch(ChangeMode(true))}> {getViewOption(currentView)} </button> }
        {selectMode && displayAllViewOptions(currentView, dispatch)}
    </div>;
}


export default ViewSelector;