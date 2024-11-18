import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ChangeViewState {
    currentView: string;
    selector: boolean;
};

const initialState: ChangeViewState = {
    currentView: "Day",
    selector: false
};

const ChangeViewSlice = createSlice({
    name: "change-view",
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


export const { ChangeMode, SetCurrentView } = ChangeViewSlice.actions;


export default ChangeViewSlice.reducer;