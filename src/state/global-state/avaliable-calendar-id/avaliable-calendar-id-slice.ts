import { createSlice } from "@reduxjs/toolkit";

export interface currentID {
    identifier: number;
};

const initialState: currentID = {
    identifier: 0
}

const CurrentIDSlice = createSlice({
    name: "current-avaliable-id",
    initialState,
    reducers: {
        IncreaseIDNumber: (state) => {
            state.identifier++;
        }
    }
});

export const { IncreaseIDNumber } = CurrentIDSlice.actions;

export default CurrentIDSlice.reducer;