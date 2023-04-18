import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

// GETTERS
export const clearCurrentProduct = createAction('[Product] Clear Current Product');
export const initCurrentProduct = createAction('[Product] Initialize Current Product');

// SETTERS
export const setCurrentProduct = createAction('[Product] Set Current Product',
props<{ product: Product }>());

// API

// VOID
export const toggleProductCode = createAction('[Product] Toggle Product Code');