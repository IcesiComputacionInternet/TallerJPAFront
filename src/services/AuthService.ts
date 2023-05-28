import axios from "axios";
import {addCorsHeaders} from "./header/Headers";

const API_URL = "http://localhost:8080";

class AuthService {
    login(email: string, password: string) {
        return axios
            .post(API_URL + "/login", {
                email,
                password
            }, {headers: addCorsHeaders()})
            .then(response => {
                if (response.data) {
                    localStorage.setItem("jwt", JSON.stringify(response.data.token));
                    localStorage.setItem("user", JSON.stringify(response.data.user.email));
                    return true;
                }
                return false;
            });
    }

    logout() {
        localStorage.removeItem("jwt");
    }
}

export default new AuthService();