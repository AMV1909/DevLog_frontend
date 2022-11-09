import { backend } from "./backend"

export const getUsersRequest = async () => {
    return await fetch(`${backend}/users`)
};

export const registerUserRequest = async (formData) => {
    return await fetch(`${backend}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => res.json());
};