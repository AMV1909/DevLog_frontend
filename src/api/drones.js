import { backend } from "./backend";
import axios from "axios";

export const getDronesRequest = async () => {
    return await axios.get(`${backend}/drones`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.data);
};

export const getDronRequest = async (id) => {
    return await axios.get(`${backend}/dron/${id}`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.data);
};

export const getAvailableDronesRequest = async () => {
    return await axios.get(`${backend}/drones/available`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.data);
};

export const getAssignedDronesRequest = async () => {
    return await axios.get(`${backend}/drones/assigned`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.data);
};

export const getDronesByUserRequest = async () => {
    return await axios.get(`${backend}/drones/assignedToUser`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.data);
};

export const assignDronRequest = async (id, pedido) => {
    return await axios.post(`${backend}/drones/assignDron/${id}`, {
        pedido
    }, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.data);
};