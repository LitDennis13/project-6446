import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppViewState {
    currentView: string;
};

const initialState: AppViewState = {
    currentView: "calendar",
};

const AppViewSlice = createSlice({
    name: "app-view",
    initialState,
    reducers: {
        ChangeView: (state, action: PayloadAction<string>)=> {
            state.currentView = action.payload;
        }

    },
});


export const { ChangeView } = AppViewSlice.actions;


export default AppViewSlice.reducer;