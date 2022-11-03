import axios from "axios";

export const registerUser = async (formData) => {
    return await axios.post("http://157.245.95.77:4000/users", formData);
}