
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class FindUsersInput {
    id?: Nullable<number>;
}

export class CreateUserInput {
    name: string;
    email: string;
}

export abstract class IQuery {
    abstract authorModule(): Nullable<AuthorQueries> | Promise<Nullable<AuthorQueries>>;

    abstract userModule(): Nullable<UserQueries> | Promise<Nullable<UserQueries>>;
}

export class AuthorQueries {
    author?: Nullable<Author>;
}

export class Author {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
}

export abstract class IMutation {
    abstract userModule(): Nullable<UserMutations> | Promise<Nullable<UserMutations>>;
}

export class UserQueries {
    users: Nullable<User>[];
}

export class UserMutations {
    createUser?: Nullable<User>;
    deleteUser?: Nullable<User>;
    inviteUser?: Nullable<User>;
}

export class User {
    id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
}

type Nullable<T> = T | null;
