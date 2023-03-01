import { LOGIN_SUCCESS, USER_LOGOUT } from "../constants/actionTypes";

const initState = {};
export const user = (state = initState, action) => {
  switch (action.type) {
      case LOGIN_SUCCESS:
          console.log(action.payload);
          return action.payload;
      case USER_LOGOUT:
          state={}
          return state

    default:
      return state;
  }
};
