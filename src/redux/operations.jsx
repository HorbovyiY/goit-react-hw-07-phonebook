import * as API from "../services/api";
import { fetchingInProgress, fetchingSuccess, fetchingError } from "../redux/contactsSlice";

export const fetchContacts = () => async dispatch => {
    dispatch(fetchingInProgress());
    await API.findContacts()
        .then(res => res.json())
        .then(res => dispatch(fetchingSuccess(res)))
        .catch(e => dispatch(fetchingError(e.message)))
};