import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }, 
    unSet() {
        axios.defaults.headers.common.Authorization = ``;
    },
}

const register = createAsyncThunk('auth/register', async credential => {
    try {
        const { data } = await axios.post('users/signup', credential);
        token.set(data.token)
        return data;
    } catch (error) {
        throw error;
    }
})

const login = createAsyncThunk('auth/login', async credential => {
    try {
        const { data } = await axios.post('users/login', credential);
        console.log(data.token)
        token.set(data.token)
        return data;
    } catch (error) {
        throw error;
    }
})

const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('users/logout');
        token.unSet();
    } catch (error) {
        throw error;
    }
})

export { register, login, logout }