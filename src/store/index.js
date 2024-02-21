import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice'
import addToCartReducer from './slices/addToCartSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'ADDEDCARTS',
    storage,

}

const persistedReducer = persistReducer(persistConfig, addToCartReducer)



const STORE = configureStore({
    reducer: {
        productsReducer,
        addToCartReducer: persistReducer(persistConfig, addToCartReducer)
        // addToCartReducer: persistedReducer
    },
})

export let persistor = persistStore(STORE)
export default STORE