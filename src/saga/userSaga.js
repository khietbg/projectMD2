import { call, put } from "@redux-saga/core/effects";
import * as productSevice from "../api/productSevice";
import * as userSevice from "../api/userSevice";
import { login_success, login_fail, get_user_success, get_product_success } from "../redux/action";
import { PRODUCT_SUCCESS, USER_SUCCESS } from "../redux/constants/actionTypes";

export const USER_POST_SAGA = function* (action) {
  try {
    yield call(userSevice.USER_POST_SEVICE, action.payload);
  } catch (error) {
    console.log(error);
  }
};
export const USER_LOGIN_SAGA = function* (action) {
  try {
    let user = yield call(userSevice.USER_LOGIN_SEVICE, action.payload);
    

    yield put(login_success(user.user));
  } catch (error) {
    yield put(login_fail());
  }
};
export const USER_GET_SAGA = function* () {
  try {
    let users = yield call(userSevice.USER_GET_SEVICE);

    yield put(get_user_success(USER_SUCCESS, users));
  } catch (error) {
    console.log(error);
  }
};
export const USER_DEL_SAGA = function* (action) {
  yield call(userSevice.USER_DEL_SEVICE, action.payload)
  yield USER_GET_SAGA()
}
// product
export const GET_PRODUCT_SAGA = function* () {
  try {
    let products = yield call(productSevice.GET_PRODUCT_SEVICE)
    yield put(get_product_success(PRODUCT_SUCCESS,products))
  } catch (error) {
    console.log(error);
  }
}
export const DEL_PRODUCT_SAGA = function* (action) {
  try {
    yield call(productSevice.DEL_PRODUCT_SEVICE, action.payload)
    yield GET_PRODUCT_SAGA()
  } catch (error) {
    console.log(error);
  }
}