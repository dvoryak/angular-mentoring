import { createAction, props } from '@ngrx/store';
import {User} from '../../../entity';

export const loginRequest = createAction('[Login Component] loginRequest', props<{ login: string, password: string}>());
export const loginComplete = createAction('[Login Component] Login complete', props<{ user: User }>());
export const loginFailure = createAction('[Login Component] Login failure', props<{ error: any }>());
export const logout = createAction('[Login Component] logout');
