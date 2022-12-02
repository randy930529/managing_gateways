import axios from "axios";
import {
  ADD_GATEWAY_SUCCESS,
  ADD_GATEWAY_FAIL,
  GET_GATEWAYS_SUCCESS,
  GET_GATEWAYS_FAIL,
} from "./types";

export const get_gateways = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const api = process.env.REACT_APP_API_URL || "http://localhost:3001";

  try {
    const res = await axios.get(`${api}/api/gateways`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_GATEWAYS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_GATEWAYS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_GATEWAYS_FAIL,
    });
  }
};

export const add_gateways = (gateway) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const body = gateway;

  const api = process.env.REACT_APP_API_URL || "http://localhost:3001";

  try {
    const res = await axios.post(`${api}/api/gateway`, body, config);

    if (res.status === 200) {
      dispatch({
        type: ADD_GATEWAY_SUCCESS,
      });
      console.log("Add gateway success!", res.data);
    } else {
      dispatch({
        type: ADD_GATEWAY_FAIL,
      });
      console.log("Add gateway fail!", res.data);
    }
  } catch (err) {
    dispatch({
      type: ADD_GATEWAY_FAIL,
    });
    console.log(`Error connect to server!: ${process.env.REACT_APP_API_URL}`);
  }
};
