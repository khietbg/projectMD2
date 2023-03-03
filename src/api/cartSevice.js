import { async } from "@firebase/util";
import { DEL_CART } from "../redux/constants/actionTypes";
import { instances } from "./axios";

export const GET_CART_SEVICE = async () => {
    let res = await instances.get("carts")
    return res.data
}
export const POST_CART_SEVICE = async (newCart) => {
    await instances.post("carts",newCart)
}
export const PATCH_CART_SEVICE = async (cart) => {
    await instances.patch("carts/" + cart.id, {quantity:cart.quantity})
}
export const DEL_CART_SEVICE = async (id) => {
    await instances.delete("carts/"+id)
}
export const FIND_CART = async (name) => {
    let res = await instances.get("carts?name=" + name)
    return res.data
}
export const CHANGE_QUAN = async (id, cart) => {
    await instances.patch("carts/"+id,cart)
}
