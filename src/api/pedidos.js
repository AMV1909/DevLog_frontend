import { backend } from "./backend";
import axios from "axios";

export const getPedidosRequest = async () => {
    return await axios.get(`${backend}/pedidos`, {
        headers: {
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.data);
};