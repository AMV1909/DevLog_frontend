import axios from "axios";

const login = async () => {
    return await axios.post("/login");
}