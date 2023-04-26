import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactsForm, Name, AddContact } from "./Form.styled";
import { addContact } from "redux/operations";

export const Form = () => { 
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts.items)
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = (e) => { 
        if (e.currentTarget.name === 'name') { 
            setName(e.currentTarget.value)
        }
        if (e.currentTarget.name === 'number') { 
            setNumber(e.currentTarget.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            name: e.currentTarget.elements.name.value,
            phone: e.currentTarget.elements.number.value
        }

        const isNameInContacts = contacts.filter(item => item.name === e.currentTarget.elements.name.value).length;

        (isNameInContacts) ?
        alert("This name is already in contacts"):
        dispatch(addContact(newContact));
        
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setNumber('');
    }

    return (
            <ContactsForm onSubmit={onSubmit}>
                <label>
                    <Name>Name</Name>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    <Name>Number</Name>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <AddContact type="submit">Add contact</AddContact>
            </ContactsForm>)
}