import { createReducer, on } from '@ngrx/store';
import {initialAuthState} from '../auth.state';
import {loginComplete, logout} from '../actions/auth.actions';


const _authReducer = createReducer(initialAuthState,
    on(loginComplete, (state, { user }) => (
        {
            ...state,
            user,
            isAuthenticated: true
        })),

    on(logout, () => ({ ...initialAuthState }))
);

export function authReducer(state, action) {
    return _authReducer(state, action);
}