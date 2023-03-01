import * as actionTypes from "./constants/actionTypes";

export const act_add_user = (newUser) => {
  return {
    type: actionTypes.USER_POST,
    payload: newUser,
  };
};
export const act_login = (userLogin) => {
  return {
    type: actionTypes.USER_LOGIN,
    payload: userLogin,
  };
};
export const login_success = (user) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: user,
  };
};
export const login_fail = () => {
    return {
        type: actionTypes.LOGIN_FAIL,
    }
}
export const logout = () => {
    return {
        type:actionTypes.USER_LOGOUT
    }
}
