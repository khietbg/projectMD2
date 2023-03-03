import * as actionTypes from "../constants/actionTypes";

const initCart=[]
export const carts = (state = initCart, action) => {
    switch (action.type) {
        case actionTypes.GET_CART_SUCCESS: 
        
            return [...action.payload]
    
    
        default:
            return state
    }
}