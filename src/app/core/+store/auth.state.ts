import {User} from '../../entity';

export interface AuthStateModel {
    user: User;
    isAuthenticated: boolean;
}

export const initialAuthState: AuthStateModel = {
    user: {
        id: 0,
        token: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    },
    isAuthenticated: false
};
