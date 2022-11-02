import axios from "axios";

export const registerUser = async () => {
    return await axios.post("http://localhost:4000/users");
}