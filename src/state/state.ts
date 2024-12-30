import { configureStore } from "@reduxjs/toolkit"; 
import CalendarViewReducer from "./global-state/calendar-view/calendar-view-slice";
import AppViewReducer from "./global-state/app-view/app-view-slice";

export const state = configureStore({
    reducer: {
        appViewSelection: AppViewReducer,
        calendarViewSelection : CalendarViewReducer
    },
});

export type RootState = ReturnType<typeof state.getState>;
export type AppDispatch = typeof state.dispatch;