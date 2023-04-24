import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";
import { Title } from "./App.styled";

export const App = () => {
return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Title>Phonebook</Title>  
        <Form/>

      <Title>Contacts</Title>
        <Filter/>
        <Contacts/>
    </div>
  );
};
