import { combineReducers } from "redux";
import { citiesReducer } from "./citiesReducers";

export const rootReducer = combineReducers({
  cities: citiesReducer,
});
