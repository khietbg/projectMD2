import { instances } from "./axios"; 

export const USER_POST_SEVICE = async  (newUser)=> {
    let res = instances.post("users", newUser)
    return res.data
}
export const USER_LOGIN_SEVICE = async (userLogin) => {
    let res = instances.post("login", userLogin)
    return (await res).data
}