import { all, takeLatest } from "@redux-saga/core/effects";
import * as actionTypes from "../redux/constants/actionTypes";
import * as userSaga from "./userSaga";

export const rootSaga = function* () {
    yield all([
        takeLatest(actionTypes.USER_POST, userSaga.USER_POST_SAGA),
        takeLatest(actionTypes.USER_LOGIN, userSaga.USER_LOGIN_SAGA)
    ])
}