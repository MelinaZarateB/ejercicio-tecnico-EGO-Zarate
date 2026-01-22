import { combineReducers } from "redux";
import homeModelsReducer from "./homeModelsReducer";
import detailModelReducer from "./detailModelReducer";

const rootReducer = combineReducers({
  models: homeModelsReducer,
  model: detailModelReducer,
});
export default rootReducer;
