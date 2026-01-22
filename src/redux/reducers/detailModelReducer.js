import { GET_MODEL_DETAIL } from "../action-types";

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
    default:
      return state;
  }
};
export default detailModelReducer;
