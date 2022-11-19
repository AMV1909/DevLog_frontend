import { backend } from "./backend";
import axios from "axios";

export const getDronesRequest = async () => {
    return await axios.get(`${backend}/drones`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.data);
};

export const getDroneRequest = async (id) => {
    return await axios.get(`${backend}/drones/${id}`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.data);
};