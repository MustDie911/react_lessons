import axios from 'axios';

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1/cars';

export const saveCar = async (data) => {
    try {
        if (data.id) {
            const response = await axios.put(`${baseUrl}/${data.id}`, data);
            return response.data;
        } else {
            const response = await axios.post(baseUrl, data);
            return response.data;
        }
    } catch (error) {
        throw error;
    }
};
export const deleteCar = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при удалении автомобиля:', error.message);
        throw error;
    }
};
export const getCars = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении списка автомобилей:', error.message);
        throw error;
    }
};