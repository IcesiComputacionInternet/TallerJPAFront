import axios from "axios";

const API_URL = "http://localhost:8080";

class AuthenticationService {
    login(email, password) {
        let token = localStorage.getItem("jwt")
        let auth = ''
        if (token) {
            auth = 'Bearer ' + token.replace(/['"]+/g, '')
        }
        return axios
            .post(API_URL + "/login", {
                email,
                password
            }, {headers: { 'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization': auth}})
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
        localStorage.removeItem("jwt")
        localStorage.removeItem("email")
        localStorage.removeItem("logged_user")
    }
}

export default new AuthenticationService();