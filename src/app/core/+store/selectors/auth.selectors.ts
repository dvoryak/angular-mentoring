import { createSelector } from '@ngrx/store';
import {AppState} from '../core.state';
import {AuthStateModel} from '../auth.state';


export const selectAuthState = (state: AppState) => state.auth;

export const currentUser = createSelector(
    selectAuthState,
    (state: AuthStateModel) => state.user
);

export const isAuthenticated = createSelector(
    selectAuthState,
    (state: AuthStateModel) => !!state.user

);


