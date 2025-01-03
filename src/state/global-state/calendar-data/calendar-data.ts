import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface TodoListEvent {
    name: string;
    description?: string;
};

export enum Category {
    Red,
    Blue,
    Green,
    Purple,
    Yellow,
    Orange,
    Pink,
};

export interface Day {
    year: number;
    month: number;
    day: number;
}

export interface EventTime {
    date: Day;
    allDay: boolean;
    startTime?: string;
    endTime?: string;
}

export interface EventRepeat {
    timeOccurrence: EventTime;
    startDate: Day;
    endDate: Day;
}

export interface CalendarEvent {
    name: string;
    description?: string;

    time: EventTime;
    repeat: EventRepeat;

    location?: string;
    category?: Category;

    todoList?: Array<TodoListEvent>; 

    parentCalendarID: number;
};

export interface CalendarInterface {
    calendarID: number;
    name: string;
    events?: Array<CalendarEvent>;
};



export interface AllCalendars {
    calendars: Array<CalendarInterface>;
};

const initialState: AllCalendars = {
    calendars: [],
};

const AllCalendarsSlice = createSlice({
    name: "app-view",
    initialState,
    reducers: {
        ChangeView: (state, action: PayloadAction<string>)=> {
            //state.currentView = action.payload;
        }

    },
});


//export const { ChangeView } = CalendarSlice.actions;


export default AllCalendarsSlice.reducer;