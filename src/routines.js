import { createRoutine } from "redux-saga-routines";

export const user = createRoutine("GET_USER");

export const register = createRoutine("REGISTER_USER");

export const login = createRoutine("LOGIN_USER");

export const logoutUser = createRoutine("LOGOUT_USER");

export const getProducts = createRoutine("GET_CATEGORIES_PRODUCT");

export const getSingleProducts = createRoutine("GET_SINGLE_PRODUCT");

export const addCartItem = createRoutine("ADD_CART_ITEM");

export const getCartItem = createRoutine("GET_CART_ITEM");

export const deleteCartItem = createRoutine("DELETE_CART_ITEM");

export const addAddress = createRoutine("ADD_ADDRESS");

export const getAddress = createRoutine("GET_ADDRESS");
