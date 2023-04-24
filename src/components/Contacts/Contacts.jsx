import { useDispatch, useSelector } from "react-redux";

import { Item, DeleteContact } from "./Contacts.styled";
import { delContact } from "redux/contactsSlice";


export const Contacts = () => { 
    const filter = useSelector(state => state.contacts.filter)
    const contacts = useSelector(state => state.contacts.contacts)
    const dispatch = useDispatch();

    return (
        <ul>
            {(filter) ?
                contacts.filter(
                    ({ name }) => name.toLowerCase().includes(filter.toLowerCase())
                ).map(
                    ({ id, name, number }) =>
                        <Item key={id}>
                            {name}: {number}
                            <DeleteContact type="button" onClick={()=>{dispatch(delContact(id))}}>Delete</DeleteContact>
                        </Item>
                ):
                contacts.map(({ id, name, number }) => 
                    <Item key={id}>
                        {name}: {number}
                        <DeleteContact type="button" onClick={()=>{dispatch(delContact(id))}}>Delete</DeleteContact>
                    </Item>
                )
            }
        </ul>
    )
}