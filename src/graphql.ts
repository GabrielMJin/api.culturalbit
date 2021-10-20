/* eslint-disable prettier/prettier */

/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewEvent {
    title: string;
    content: string;
    date: string;
}

export class UpdateEvent {
    id: string;
    published?: Nullable<boolean>;
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class Event {
    id: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: string;
    date: string;
    authorId: number;
}

export abstract class IQuery {
    abstract events(): Event[] | Promise<Event[]>;

    abstract event(id: string): Nullable<Event> | Promise<Nullable<Event>>;
}

export abstract class IMutation {
    abstract createEvent(input?: Nullable<NewEvent>): Event | Promise<Event>;

    abstract updateEvent(input?: Nullable<UpdateEvent>): Nullable<Event> | Promise<Nullable<Event>>;

    abstract deleteEvent(id: string): Nullable<Event> | Promise<Nullable<Event>>;
}

type Nullable<T> = T | null;
