export const getUsers = async () => {
    return await fetch("http://localhost:4000/users")
};

export const registerUser = async (formData) => {
    return await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res) => res.json());
};