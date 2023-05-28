import axios from "axios";
import authHeader from "./authHeader";
import Swal from "sweetalert2";

const URL_API = "http://localhost:9099/";

const getAccounts = () => {
  return axios
    .get(`${URL_API}account/getAccounts`, {
      headers: authHeader(),
    })
    .then((response) => {
      if (response.status === 200) {
        return response;
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 403) {
        Swal.fire({
          icon: "error",
          title:
            '<span style="font-family: Arial, sans-serif;">Error al autenticar</span>',
          html: '<div style="font-family: Arial, sans-serif;">Usuario o contraseña incorrectos</div>',
        }).then(() => {
          localStorage.removeItem("token");

          window.location.href = "/login";
        });
      }
    });
};

const homeServices = {
  getAccounts,
};

export default homeServices;
