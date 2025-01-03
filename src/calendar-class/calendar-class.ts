/*
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

*/

interface TodoListEvent {
    name: string;
    description?: string;
};

enum Category {
    Red,
    Blue,
    Green,
    Purple,
    Yellow,
    Orange,
    Pink,
};

interface Day {
    year: number;
    month: number;
    day: number;
}



interface EventTime {
    date: Day;
    allDay: boolean;
    startTime?: string;
    endTime?: string;
}

interface EventRepeat {
    timeOccurrence: EventTime;
    startDate: Day;
    endDate: Day;
}

interface EventInterface {
    name: string;
    description?: string;

    time: EventTime;
    repeat: EventRepeat;

    location?: string;
    category?: Category;

    todoList?: Array<TodoListEvent>; 

    parentCalendarID: number;
};

class Calendar {
    
    name: string;
    identifier: number;
    events: Array<EventInterface>;

    constructor(name: string, id: number) {
        this.name = name;
        this.identifier = id;
    }


};



/*

const mainCalendar: CalendarInterface = {
    calendarID: 0,
}

export interface AllCalendars {
    calendars: Array<CalendarInterface>;
};

*/