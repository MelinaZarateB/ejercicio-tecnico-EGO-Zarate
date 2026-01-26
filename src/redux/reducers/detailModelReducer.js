import { GET_MODEL_DETAIL, CLEAN_DETAIL } from "../action-types";

let initialState = {
  model: {},
};

const detailModelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MODEL_DETAIL:
      return {
        ...state,
        model: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        model: {},
      };
    default:
      return state;
  }
};
export default detailModelReducer;
