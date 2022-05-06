import { combineReducers } from "redux";
import fetchData from "./fetchData";
import fetchUserReducer from "./fetchUsers";
export default combineReducers({
  fetchData,
  fetchUserReducer,
});
