import { createAction, createReducer, on } from "@ngrx/store";

export const loginReducer = createReducer({ maskUserName: false }, on(createAction('[Login] Mask User Name', 
state => {
    console.log("login initial state: " + JSON.stringify(state));
    return {
        ...state,
        maskUserName: !state.maskUserName
    }
})))