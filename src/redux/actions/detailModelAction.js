import axios from "axios";
import { GET_MODEL_DETAIL, CLEAN_DETAIL } from "../action-types";
import Swal from "sweetalert2";

export const getModelDetail = (id) => {
  return async (dispatch) => {
    try {
      const model = await axios.get(
        `https://challenge.egodesign.dev/api/models/${id}`,
      );
      if (model) {
        dispatch({
          type: GET_MODEL_DETAIL,
          payload: model.data,
        });
      }
    } catch (error) {
      const mensajeError =
        error.response?.data?.message ||
        "Ocurrio un error al intentar obtener el modelo";
      Swal.fire({
        title: "Error",
        text: mensajeError,
        icon: "error",
      });
    }
  };
};

export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};
