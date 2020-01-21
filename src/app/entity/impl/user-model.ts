import {IUser} from '../user-model';


export class User implements IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    fakeToken: string;
    password: string;
}
