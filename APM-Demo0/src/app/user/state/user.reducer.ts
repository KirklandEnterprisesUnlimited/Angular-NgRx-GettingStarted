import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";

import * as AppState from '../../state/app.state';
import * as UserAction from '../state/user.actions';


export interface State extends AppState.State {
    users: UserState;
}

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
    allUsers: User[];
}

const initialState: UserState = { 
    maskUserName: true,
    currentUser: null,
    allUsers: []
}

export const userReducer = createReducer<UserState>(initialState, on(UserAction.maskUserName, 
state => {
    return {
        ...state,
        maskUserName: !state.maskUserName
    }
}))

// SELECTORS
const getUserSlice = createFeatureSelector<UserState>('user');
export const getMaskUserName = createSelector(getUserSlice, state => state.maskUserName);
export const getCurrentUser = createSelector(getUserSlice, state => state.currentUser);