import * as actionTypes from "../constants/actionTypes";
const initState = [];
export const users = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.USER_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};
