import axios from "axios";

const $host = axios.create({
    baseURL: `https://api.slingacademy.com/v1/sample-data/`
})

$host.interceptors.request.use((config) => {
    config.headers['Accept'] = `application/json`
    return config
})

export { $host }