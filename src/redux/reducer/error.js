import { LOGIN_FAIL } from "../constants/actionTypes"

const initState = ""
export const error = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_FAIL:
            return "sai tài khoản hoặc mật khẩu"
                
        default:
            return state
           
    }
  
}