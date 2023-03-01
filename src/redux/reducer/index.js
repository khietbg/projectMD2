import { combineReducers } from "redux";
import { error } from "./error";
import { user } from "./user";
import { users } from "./users";

export const rootReducer = combineReducers({ users, user, error });
