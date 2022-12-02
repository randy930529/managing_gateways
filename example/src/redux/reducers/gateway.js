import {
  ADD_GATEWAY_SUCCESS,
  ADD_GATEWAY_FAIL,
  GET_GATEWAYS_SUCCESS,
  GET_GATEWAYS_FAIL,
} from "../actions/types";

const initialState = {
  gateways: [],
};

const Gateway = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_GATEWAY_SUCCESS:
      return {
        ...state,
      };
    case ADD_GATEWAY_FAIL:
      return {
        ...state,
      };
    case GET_GATEWAYS_SUCCESS:
      return {
        ...state,
        gateways: payload,
      };
    case GET_GATEWAYS_FAIL:
      return {
        ...state,
        gateways: [],
      };

    default:
      return state;
  }
};

export default Gateway;
