import { backend } from "./backend";
import axios from "axios";

export const getProductsRequest = async () => {
    return await axios.get(`${backend}/productos`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
};

export const getOneProductRequest = async (id) => {
    return await axios.get(`${backend}/producto/${id}`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
};

export const createProductRequest = async (formData) => {
    return await axios.post(`${backend}/productos`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
};

export const updateProductRequest = async (id, formData) => {
    return await axios.put(`${backend}/productos/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
};

export const deleteProductRequest = async (id) => {
    return await axios.delete(`${backend}/productos/${id}`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
};

export const getThreeProductsRequest = async () => {
    return await axios.get(`${backend}/productos/three`).then((res) => res.data);
};

export const getTenProductsRequest = async () => {
    return await axios.get(`${backend}/productos/ten`).then((res) => res.data);
};