import { configureStore } from "@reduxjs/toolkit"; 
import ChangeViewReducer from "./global-state/change-view-slice";

export const state = configureStore({
    reducer: {
        viewSelection : ChangeViewReducer
    },
});

export type RootState = ReturnType<typeof state.getState>;
export type AppDispatch = typeof state.dispatch;