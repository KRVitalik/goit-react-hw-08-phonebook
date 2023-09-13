import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

export const getContact = async () => {
    try {
        const { data } = await axios.get('contacts');
        return data
    } catch (error) {
        throw error;
    }
}

export const createContact = async (contact) => {
    const { data } = await axios.post(`contacts`, contact)
    return await data
}

export const delContact = async (id) => {
    const { data } = await axios.delete(`contacts/${id}`);
    console.log(data)
    return await data
}