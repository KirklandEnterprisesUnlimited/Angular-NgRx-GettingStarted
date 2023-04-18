import { createAction, createReducer, on } from "@ngrx/store";
import { User } from "../user";
import * as AppState from '../../state/app.state';

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

export const userReducer = createReducer<UserState>(initialState, on(createAction('[User] Mask User Name'), 
state => {
    return {
        ...state,
        maskUserName: !state.maskUserName
    }
}))