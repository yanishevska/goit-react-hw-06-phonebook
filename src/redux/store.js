import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from "./contacts/contacts-reducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const middleware = [
    ...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }), logger];

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

 const persistedReducer = persistReducer(persistConfig, rootReducer)


 export const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);


//===================REDUX_WITHOUT_TOOLKIT=================//

// import { createStore} from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from "./contacts/contacts-reducer";

// const store = createStore(rootReducer, composeWithDevTools())

// export default store;
