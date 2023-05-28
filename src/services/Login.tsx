import axios from "axios";

const baseUrl = "http://localhost:9091";

export const login = async (username: string, password: string) => {
    const {data} = await axios.post(
        `${baseUrl}/token`, 
        {
            username,
            password
        },
        {
            headers: {
                "Access-Control-Allow-Origin": baseUrl,
            },
        }
    );
    if (data.token) {
        localStorage.setItem("jwt", data.token);
        return true;
    }else {
        return false;
    }
}