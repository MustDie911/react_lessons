import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getTodos = () => axiosInstance.get('/todos').then(value => value)

const getAlbums = () => axiosInstance.get('/albums').then(value => value)

const getComments = () => axiosInstance.get('/comments').then(value => value)

const getPosts = (id) => axiosInstance.get(`/posts/${id}`).then(value => value);

export {getTodos, getAlbums, getComments, getPosts}