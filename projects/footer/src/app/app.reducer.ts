import {createReducer} from '@ngrx/store';
import {appState} from './app.state';

export const reducer = createReducer(appState);
