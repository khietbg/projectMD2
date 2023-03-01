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
export const act_get_user = () => {
  return {
    type:actionTypes.GET_USER
  }
}
export const get_user_success = (actionType, data) => {
  return {
    type: actionType,
    payload:data
  }
}
export const del_user = (idDel) => {
  return {
    type: actionTypes.DEL_USER,
    payload:idDel
  }
}



// product action
export const act_get_product = () => {
  return {
    type:actionTypes.GET_PRODUCT
  }
}
export const get_product_success = (actionType,data) => {
  return {
    type: actionType,
    payload:data
  }
}
export const act_del_product = (idDel) => {
  return {
    type: actionTypes.DEL_PRODUCT,
    payload:idDel
  }
}
export const act_add_product = (newProduct) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload:newProduct
  }
}
export const act_update_product = (updateProduct) => {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    payload: updateProduct
  }
}
