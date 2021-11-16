import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const deleteContacts = createAction('contacts/delete');
export const changeContact = createAction('contacts/changeContact');



//===================REDUX_WITHOUT_TOOLKIT=================//

// import { ADD,DELETE,CHANGE_FILTER} from "./contacts-types";

// export const addContact = contact => ({
//     type:  ADD,
//    payload: contact
// });

// export const deleteContacts = id => ({
//     type: DELETE,
//     payload: id,
// });

// export const changeContact = filter => ({
//     type: CHANGE_FILTER,
//     payload: filter,
// });
