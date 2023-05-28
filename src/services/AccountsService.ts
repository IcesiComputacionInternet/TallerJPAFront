import {addCorsHeaders} from "./header/Headers";
import axios from "axios";

const API_URL = "http://localhost:8080/accounts";

class AccountsService {
    getAllByUser() {
        return axios
            .get(API_URL + "/all/user", {headers: addCorsHeaders()})
            .then(response => {
                return response.data;
            });
    }

}

export default new AccountsService();