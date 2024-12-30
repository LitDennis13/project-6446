import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalendarViewState {
    currentView: string;
    selector: boolean;
};

const initialState: CalendarViewState = {
    currentView: "Day",
    selector: false
};

const CalendarViewSlice = createSlice({
    name: "calendar-view",
    initialState,
    reducers: {
        ChangeMode: (state, action: PayloadAction<boolean>) => {
            state.selector = action.payload;
        },
        SetCurrentView: (state, action: PayloadAction<string>) => {
            state.currentView = action.payload;
        }
    },
});


export const { ChangeMode, SetCurrentView } = CalendarViewSlice.actions;


export default CalendarViewSlice.reducer;