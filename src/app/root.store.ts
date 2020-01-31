import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import {AppState} from './core/+store/core.state';
import {environment} from '../environments/environment';
import * as auth from '../app/core/+store/reducers/auth.reducer';

export const appReducers: ActionReducerMap<AppState> = {
    auth: auth.authReducer,
};

export function debug(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return (state: AppState, action: any) => {
        const result = reducer(state, action);
        console.groupCollapsed(action.type);
        console.log('prev state', state);
        console.log('action', action);
        console.log('next state', result);
        console.groupEnd();

        return result;

    };
}

export const metaReducers: MetaReducer<AppState>[] =
    !environment.production ? [debug] : [];
