import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from "../../state/app.state";

export interface State extends AppState.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

export const getShowProductCode = (state: State) => state.products.showProductCode;
export const getProducts = (state: State) => state.products.products;
// const getProductFeatureState = createFeatureSelector<ProductState>('products');

// export const getShowProductCode = createSelector(getProductFeatureState, state => state.showProductCode);


export const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
}

export const productReducer = createReducer<ProductState>(initialState, on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    return {
        ...state,
        showProductCode: !state.showProductCode
    }
}))