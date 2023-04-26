import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../services/api";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await API.findContacts();
        return response.data;
    } catch (error){ 
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await API.addContacts(contact);
        return response.data;
    } catch (error){ 
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact  = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const response = await API.delContacts(id);
        return response.data;
    } catch (error){ 
        return thunkAPI.rejectWithValue(error.message);
    }
});