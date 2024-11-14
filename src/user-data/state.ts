import { configureStore } from "@reduxjs/toolkit"; 

export const userData = configureStore({
    reducer: {},
});

export type RootState = ReturnType<typeof userData.getState>;
export type AppDispatch = typeof userData.dispatch;