import { backend } from "./backend";
import axios from "axios";

export const loginRequest = async (email, password) => {
    return await axios.post(`${backend}/login`, {
        email,
        password
    }).then((res) => res.data);
}
