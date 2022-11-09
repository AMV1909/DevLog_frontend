import { backend } from "./backend";

export const loginRequest = async (email, password) => {
    return await fetch(`${backend}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
};
