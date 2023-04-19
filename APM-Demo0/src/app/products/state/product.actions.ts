import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

// GETTERS
export const clearCurrentProduct = createAction('[Product] Clear Current Product');
export const initCurrentProduct = createAction('[Product] Initialize Current Product');

// SETTERS
export const setCurrentProduct = createAction('[Product] Set Current Product',
props<{ product: Product }>());

// API
export const loadProducts = createAction('[Product] Load all products');
export const loadProductsSuccess = createAction(
    '[Product] Loaded all products successfully',
    props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
    '[Product] Load products failed',
    props<{ errorMessage: string }>()
)

// VOID
export const toggleProductCode = createAction('[Product] Toggle Product Code');