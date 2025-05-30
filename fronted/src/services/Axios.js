import axios from "axios";

const instance = axios.create(
    {
        baseURL:'https://api-lab3-bd.eduvial.space/api',
        withCredentials: false
    }
)

export default instance
