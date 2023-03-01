 import * as actionTypes  from "../constants/actionTypes";

const initState = []
export const products = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_SUCCESS:
          return [...action.payload];
        default:
          return state;
      }
}