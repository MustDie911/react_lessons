import axios from 'axios';

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1/cars';

export const getCars = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};
export const deleteCar = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;

};

export const saveCar = async (data) => {

    if (data.id) {
        const response = await axios.put(`${baseUrl}/${data.id}`, data);
        return response.data;
    } else {
        const response = await axios.post(baseUrl, data);
        return response.data;
    }
};