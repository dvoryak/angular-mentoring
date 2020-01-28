import {IUser} from '../user-model';


export class User implements IUser {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    constructor(user?: User) {
        this.id = user && user.id || null;
        this.firstName = user && user.firstName || '';
        this.lastName = user && user.lastName || '';
        this.email = user && user.email || '';
        this.password = user && user.password || '';
    }

}
