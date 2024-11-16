import { createRoutine } from "redux-saga-routines";

export const getUser = createRoutine("GET_USER");

export const getProducts = createRoutine("GET_CATEGORIES_PRODUCT");

export const getSingleProducts = createRoutine("GET_SINGLE_PRODUCT");
