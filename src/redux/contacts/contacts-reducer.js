import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import contactsInit from "../../contacts.json";
import { addContact, changeContact, deleteContacts } from "./contacts-actions";


const initialState = [...contactsInit];
const initialFilter = '';

const contactReducer = createReducer(initialState, {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContacts]: (state, { payload }) => state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer(initialFilter, {
    [changeContact]: (_,{payload})=>payload,
})

export default combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
});


//===================REDUX_WITHOUT_TOOLKIT=================//
// import { combineReducers } from "redux";
// import {ADD,DELETE,CHANGE_FILTER} from '../contacts/contacts-types';
// import contactsInit from "../../contacts.json";


// const initialState = [...contactsInit];
// const initialFilter = '';


// const contactReducer = (state = initialState, {type,payload}) => {
//     switch (type) {
//         case ADD:
//             return [...state,payload];
        
//         case DELETE:
//             return state.filter((contact) => contact.id !== payload);
        
//         default:
//             return state;
//     }
   
// };

// const filterReducer = (state = initialFilter, { type, payload }) => {
//     switch (type) {
//         case CHANGE_FILTER:
//             return payload;
    
//         default:
//             return state;
//     }
// };
// export default combineReducers({
//     contacts: contactReducer,
//     filter: filterReducer,
// });
