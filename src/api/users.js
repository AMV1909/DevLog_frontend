import axios from "axios";

export const registerUser = async () => {
    return await axios.post("/users");
}