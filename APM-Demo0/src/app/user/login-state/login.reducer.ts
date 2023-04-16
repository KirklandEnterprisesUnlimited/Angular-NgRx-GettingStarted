import { createAction, createReducer, on } from "@ngrx/store";

export const loginReducer = createReducer({ maskUserName: false }, on(createAction('[Login] Mask User Name'), 
state => {
    return {
        ...state,
        maskUserName: !state.maskUserName
    }
}))