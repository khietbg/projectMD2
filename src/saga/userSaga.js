import { call, put } from "@redux-saga/core/effects";
import * as userSevice from "../api/userSevice";
import { login_success, login_fail } from "../redux/action";

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
    console.log(user);

    yield put(login_success(user.user));
  } catch (error) {
    yield put(login_fail())
  }
};
