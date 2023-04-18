import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Product } from "../product";
import * as AppState from "../../state/app.state";
import * as ProductActions from "./product.actions";
import { state } from "@angular/animations";

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


const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
}

export const productReducer = createReducer<ProductState>(initialState,
    on(ProductActions.toggleProductCode, (state): ProductState => {
    return {
        ...state,
        showProductCode: !state.showProductCode
    }}),
    on(ProductActions.setCurrentProduct, (state, action): ProductState => {
        return {
            ...state,
            currentProduct: action.product
        }
    }),
    on(ProductActions.clearCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProduct: null
        }
    }),
    on(ProductActions.initCurrentProduct, (state): ProductState => {
        return {
            ...state,
            currentProduct: {
                id: 0,
                productName: '',
                productCode: 'New',
                description: '',
                starRating: 0
            }
        }
    })
)