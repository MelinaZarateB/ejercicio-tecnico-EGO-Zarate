import { GET_MODELS } from "../action-types";

let initialState = {
  models: [],
};

const homeModelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODELS:
      return {
        ...state,
        models: action.payload,
      };
    default:
      return state;
  }
};
export default homeModelsReducer;
