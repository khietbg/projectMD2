import { all, takeLatest } from "@redux-saga/core/effects";
import * as actionTypes from "../redux/constants/actionTypes";
import * as userSaga from "./userSaga";

export const rootSaga = function* () {
  yield all([
    takeLatest(actionTypes.USER_POST, userSaga.USER_POST_SAGA),
    takeLatest(actionTypes.USER_LOGIN, userSaga.USER_LOGIN_SAGA),
    takeLatest(actionTypes.GET_USER, userSaga.USER_GET_SAGA),
    takeLatest(actionTypes.DEL_USER, userSaga.USER_DEL_SAGA),
    // product
    takeLatest(actionTypes.GET_PRODUCT, userSaga.GET_PRODUCT_SAGA),
    takeLatest(actionTypes.DEL_PRODUCT, userSaga.DEL_PRODUCT_SAGA),
    takeLatest(actionTypes.ADD_PRODUCT, userSaga.ADD_PRODUCT_SAGA),
    takeLatest(actionTypes.UPDATE_PRODUCT, userSaga.UPDATE_PRODUCT_SAGA),
    // cart
    takeLatest(actionTypes.GET_CART, userSaga.GET_CART_SAGA),
    takeLatest(actionTypes.POSR_CART, userSaga.POSR_CART_SAGA),
    takeLatest(actionTypes.UPDATE_CART, userSaga.PATCH_CART_SAGA),
    takeLatest(actionTypes.DEL_CART, userSaga.DEL_CART_SAGA),
  ]);
};
