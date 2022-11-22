import { backend } from "./backend"
import axios from "axios"

export const getUsersRequest = async () => {
    return await axios.get(`${backend}/users`).then((res) => res.data);
};

export const registerUserRequest = async (formData) => {
    return await axios.post(`${backend}/users`, formData, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.data);
};

export const getUserInfoRequest = async () => {
    return await axios.get(`${backend}/users/info`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
};