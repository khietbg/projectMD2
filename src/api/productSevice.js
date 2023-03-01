import { async } from "@firebase/util";
import { instances } from "./axios";

export const GET_PRODUCT_SEVICE = async () => {
    let res = await instances.get("products")
    return res.data
}
export const DEL_PRODUCT_SEVICE = async (id) => {
    await instances.delete("products/"+id)
}