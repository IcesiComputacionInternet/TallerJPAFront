import axios from "axios";

const API_URL = "http://localhost:8080";

class AuthenticationService {
    login(email, password) {
        return axios
            .post(API_URL + "/login", {
                email,
                password
            }, {headers: { 'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization': 'Bearer ' + localStorage.getItem("jwt").replace(/['"]+/g, '')}})
            .then(res => {
                if (res.data) {
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

export default new AuthenticationService();