import { ActionReducerMap } from '@ngrx/store';

import * as auth from './reducers/auth.reducer';
import {AuthStateModel} from './auth.state';

export interface AppState {
    auth: AuthStateModel;
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: auth.authReducer
};
