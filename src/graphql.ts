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
    published: boolean;
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


export class NewUser {
    email: string;
    name: string;
}

export class UpdateUser {
    id: string;
    email: string;
    name: string;
}

export class User {
    id: string;
    email: string;
    name: string;
    createdAt: string;
}

export abstract class IQuery {
    abstract events(): Event[] | Promise<Event[]>;

    abstract event(id: string): Nullable<Event> | Promise<Nullable<Event>>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createEvent(input?: Nullable<NewEvent>): Event | Promise<Event>;
    abstract updateEvent(input?: Nullable<UpdateEvent>): Nullable<Event> | Promise<Nullable<Event>>;
    abstract deleteEvent(id: string): Nullable<Event> | Promise<Nullable<Event>>;

    abstract createUser(input?: Nullable<NewUser>): User | Promise<User>;
    abstract updateUser(input?: Nullable<UpdateUser>): Nullable<User> | Promise<Nullable<User>>;
    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;