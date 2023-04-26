import axios from "axios";

axios.defaults.baseURL = 'https://6443f6d390738aa7c07bbffd.mockapi.io/users/contacts';

export const findContacts = () => { 
    return axios.get(``)
}

export const addContacts = (contact) => { 
    return axios.post(``, contact)
}

export const delContacts = (id) => { 
    return axios.delete(`/${id}`)
}