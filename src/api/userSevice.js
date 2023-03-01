import { instances } from "./axios";

export const USER_POST_SEVICE = async (newUser) => {
  let res = instances.post("users", newUser);
  return res.data;
};
export const USER_LOGIN_SEVICE = async (userLogin) => {
  let res = await instances.post("login", userLogin);
  return res.data;
};
export const USER_GET_SEVICE = async () => {
  let response = await instances.get("users");
  return response.data;
};
export const USER_DEL_SEVICE = async (id) => {
    await instances.delete("users/" + id);
};
