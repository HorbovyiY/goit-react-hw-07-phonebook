import { createSlice } from '@reduxjs/toolkit'

import { fetchContacts, addContact, deleteContact} from './operations';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
        filter: ''
    },
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
    },
        extraReducers: {
            [fetchContacts.pending](state) {
                state.contacts.isLoading = true;
            },
            [fetchContacts.fulfilled](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items = action.payload;},
            [fetchContacts.rejected](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            },
            [addContact.pending](state) {
                state.contacts.isLoading = true;
            },
            [addContact.fulfilled](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                state.contacts.items.push(action.payload);
            },
            [addContact.rejected](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            },
            [deleteContact.pending](state) {
                state.contacts.isLoading = true;
            },
            [deleteContact.fulfilled](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = null;
                const index = state.contacts.items.findIndex(
                    contact => contact.id === action.payload.id
                    );
                state.contacts.items.splice(index, 1);
            },
            [deleteContact.rejected](state, action) {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            },
        }
})

export const {changeFilter } = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer