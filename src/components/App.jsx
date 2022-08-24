import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import Container from "./Container/Container";
import { useGetAllContactsQuery } from "../redux/mokeApi"

export function App() {
  const { data=[] } = useGetAllContactsQuery();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contacts={data} />
      <h2>Contacts</h2>
      <ContactFilter title="Find contacts by name" />
      {data && <ContactList contacts={data} />}
    </Container>
  )
}
