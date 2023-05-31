import axios from "axios";

const API_URL = "http://localhost:8080/accounts";

class AccountsService {
    getAllUser() {
        let token = localStorage.getItem("jwt")
        let auth = ''
        if (token) {
            auth = 'Bearer ' + localStorage.getItem("jwt").replace(/['"]+/g, '')
        }
        return axios
            .get(API_URL + "/user", {headers: { 'Access-Control-Allow-Origin': 'http://127.0.0.1:5173',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Authorization': auth}})
            .then(response => {
                return response.data;
            });
    }

}

export default new AccountsService();