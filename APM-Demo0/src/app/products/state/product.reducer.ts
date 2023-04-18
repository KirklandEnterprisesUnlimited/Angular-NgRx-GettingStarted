import { createAction, createReducer, on } from "@ngrx/store";
import { Product } from "../product";
import { ProductActions } from "./product.actions";

export interface State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

export const productReducer = createReducer({ showProductCode: false } as ProductState, on(createAction('[Product] Toggle Product Code'), state => {
    return {
        ...state,
        showProductCode: !state.showProductCode
    }
}))