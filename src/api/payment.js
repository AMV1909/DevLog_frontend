import { backend } from "./backend";
import axios from "axios";

export const payment = async (id, product, amount, total, formData) => {
    return await axios.post(`${backend}/payment`, {
        id,
        product,
        amount,
        total,
        formData
    }, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
}

export const paymentMany = async (id, cart, total, formData) => {
    return await axios.post(`${backend}/paymentMany`, {
        id,
        cart,
        total,
        formData
    }, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        }
    }).then((res) => res.data);
}