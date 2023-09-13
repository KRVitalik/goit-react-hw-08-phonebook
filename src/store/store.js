import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./contactSlice";
import {persistedReducer} from "../components/redux/auth/authSlice";
import { persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
    REGISTER,
} from 'redux-persist'
  

export const store = configureStore({
    reducer: {
        myContact: contactSlice.reducer,
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export const persistor = persistStore(store);