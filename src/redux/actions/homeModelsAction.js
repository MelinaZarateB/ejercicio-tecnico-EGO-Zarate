import axios from "axios";
import Swal from "sweetalert2";
import { GET_MODELS } from "../action-types";

export const getModels = () => {
  return async (dispatch) => {
    try {
      const models = await axios.get(
        "https://challenge.egodesign.dev/api/models/",
      );
      if (models) {
        dispatch({
          type: GET_MODELS,
          payload: models.data,
        });
      }
    } catch (error) {
      const mensajeError =
        error.response?.data?.message ||
        "Ocurrio un error al intentar obtener los modelos";
      Swal.fire({
        title: "Error",
        text: mensajeError,
        icon: "error",
      });
    }
  };
};
