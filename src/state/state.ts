import { configureStore } from "@reduxjs/toolkit"; 
import CalendarViewReducer from "./global-state/calendar-view/calendar-view-slice";
import AppViewReducer from "./global-state/app-view/app-view-slice";
import CurrentIDReducer from "./global-state/avaliable-calendar-id/avaliable-calendar-id-slice.ts"

export const state = configureStore({
    reducer: {
        appViewSelection: AppViewReducer,
        calendarViewSelection : CalendarViewReducer,
        currentAvailableID: CurrentIDReducer,

    },
});

export type RootState = ReturnType<typeof state.getState>;
export type AppDispatch = typeof state.dispatch;