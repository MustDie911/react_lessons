import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', headers: {'Content-type': 'application/json; charset=UTF-8'}
});

const addComment = (data) => axiosInstance.post('/comments', {data: data})

export {addComment}