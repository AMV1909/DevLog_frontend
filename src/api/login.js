import axios from "axios";

const login = async () => {
    return await axios.post("http://157.245.95.77:4000/login");
}