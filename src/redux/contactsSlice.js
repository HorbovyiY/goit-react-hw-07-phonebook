import { createSlice} from '@reduxjs/toolkit'

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
        addContact: (state, action) => {
            state.contacts.items=[...state.contacts.items, action.payload]
        },
        delContact: (state, action) => {
            state.contacts.items=state.contacts.items.filter(contact=>contact.id!==action.payload)
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
        fetchingInProgress(state) {
            state.contacts.isLoading = true;
        },
        fetchingSuccess(state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
        },
        fetchingError(state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },
    },
})

export const { addContact, delContact, changeFilter, fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions

export default contactsSlice.reducer