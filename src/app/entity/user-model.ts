export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    token?: string;
}

export type UserAuth = Pick<IUser, 'email' | 'password'>;
export type UserToken = Pick<IUser, 'token'>;

