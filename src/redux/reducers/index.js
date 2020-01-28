import { combineReducers } from "redux";
import currencies from "./currencyReducer";

const rootReducer = combineReducers({
  currencies
});

export default rootReducer;
