import { backend } from "./backend";

export const getProductsRequest = async () => {
    return await fetch(`${backend}/productos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("Authorization")
        },
    }).then((res) => res.json());
}