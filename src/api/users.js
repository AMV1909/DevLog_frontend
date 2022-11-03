import axios from "axios";

export const registerUser = async (formData) => {
    return await axios.post("http://localhost:4000/users", formData);
}