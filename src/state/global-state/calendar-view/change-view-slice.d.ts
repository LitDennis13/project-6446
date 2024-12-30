export interface ChangeViewState {
    currentView: string;
    selector: boolean;
}
export declare const ChangeMode: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "change-view/ChangeMode">, SetCurrentView: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "change-view/SetCurrentView">;
declare const _default: import("redux").Reducer<ChangeViewState>;
export default _default;
