export declare const state: import("@reduxjs/toolkit").EnhancedStore<{
    viewSelection: import("./global-state/change-view-slice").ChangeViewState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        viewSelection: import("./global-state/change-view-slice").ChangeViewState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof state.getState>;
export type AppDispatch = typeof state.dispatch;
