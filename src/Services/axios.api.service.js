import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getTodos = () => axiosInstance.get('/todos').then(value => value)


export {getTodos}