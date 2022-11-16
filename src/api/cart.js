import { backend } from "./backend";
import axios from "axios";

export const getCartRequest = async () => {
    return await axios.get(`${backend}/carrito`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
};

export const addProductToCartRequest = async (productCart) => {
    return await axios.post(`${backend}/carrito`, productCart, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
};

export const deleteProductFromCartRequest = async (id) => {
    return await axios.delete(`${backend}/carrito/${id}`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
};