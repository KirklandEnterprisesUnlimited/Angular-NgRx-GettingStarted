import { createReducer, on } from "@ngrx/store";
import { ProductActions } from "./product.actions";

export const productReducer = createReducer(initialState, on(ProductActions.toggleProductCode, state => {
    return {
        ...state,
        showProductCode: !state.showProductCode
    }
}))