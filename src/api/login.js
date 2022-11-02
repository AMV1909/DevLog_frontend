import axios from "axios";

const login = async () => {
    return await axios.post("http://localhost:4000/login");
}