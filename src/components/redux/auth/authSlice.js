import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import { initialState } from "./initialState";
import { login, logout, register } from "./authOperations";

const { createSlice } = require("@reduxjs/toolkit");



const authSlice = createSlice({
    name: 'auth',
    initialState,
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    })
    .addCase(logout.fulfilled, (state) => {
      state.user = initialState.user
      state.token = initialState.token
      state.isLoggedIn = initialState.isLoggedIn
      })
    }
})

const persistConfig = {
    key: 'myContact',
    storage,
};

export const persistedReducer = persistReducer(persistConfig, authSlice.reducer)