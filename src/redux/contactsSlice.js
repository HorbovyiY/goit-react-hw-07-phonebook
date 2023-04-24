import { createSlice } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: ''
    },

    reducers: {
        addContact: (state, action) => {
            state.contacts=[...state.contacts, action.payload]
        },
        delContact: (state, action) => {
            state.contacts=state.contacts.filter(contact=>contact.id!==action.payload)
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
    },
})

export const { addContact, delContact, changeFilter } = contactsSlice.actions

export default contactsSlice.reducer