import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = () => axiosInstance.get('/users').then(value => value);


export {getUsers}