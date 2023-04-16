import { createAction, createReducer, on } from "@ngrx/store";
import { ProductActions } from "./product.actions";

export const productReducer = createReducer({ showProductCode: false }, on(createAction('[Product] Toggle Product Code'), state => {
    return {
        ...state,
        showProductCode: !state.showProductCode
    }
}))