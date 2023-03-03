import { combineReducers } from "redux";
import { carts } from "./carts";
import { error } from "./error";
import { products } from "./product";
import { user } from "./user";
import { users } from "./users";

export const rootReducer = combineReducers({
  users,
  user,
  error,
  products,
  carts,
});
