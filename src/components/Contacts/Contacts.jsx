import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Item, DeleteContact } from "./Contacts.styled";
import { delContact } from "redux/contactsSlice";
import { fetchContacts } from "../../redux/operations";

export const Contacts = () => { 
    const filter = useSelector(state => state.contacts.filter)
    const contacts = useSelector(state => state.contacts.contacts.items)
    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(fetchContacts())
    },[dispatch])

    return (
        <ul>
            {(filter) ?
                contacts.filter(
                    ({ name }) => name.toLowerCase().includes(filter.toLowerCase())
                ).map(
                    ({ id, name, phone }) =>
                        <Item key={id}>
                            {name}: {phone}
                            <DeleteContact type="button" onClick={()=>{dispatch(delContact(id))}}>Delete</DeleteContact>
                        </Item>
                ):
                contacts.map(({ id, name, phone }) => 
                    <Item key={id}>
                        {name}: {phone}
                        <DeleteContact type="button" onClick={()=>{dispatch(delContact(id))}}>Delete</DeleteContact>
                    </Item>
                )
            }
        </ul>
    )
}