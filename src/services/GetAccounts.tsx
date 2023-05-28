import axios from "axios";

const baseUrl = "http://localhost:9091";

export const getAccountsByUserLoged = async () => {
    const jwt = localStorage.getItem("jwt");
    const {data} = await axios.get(
        `${baseUrl}/api/accounts/accounts`,
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        }
    );
    return data;
}