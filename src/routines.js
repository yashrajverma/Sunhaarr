import { createRoutine } from "redux-saga-routines";

export const user = createRoutine("GET_USER");

export const getProducts = createRoutine("GET_CATEGORIES_PRODUCT");

export const getSingleProducts = createRoutine("GET_SINGLE_PRODUCT");

export const addCartItem = createRoutine("ADD_CART_ITEM");
