import AddContact from '../AddContact/AddContact';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { AppStyled, Container, ContactsStyled } from './Contacts.styled';

const Contacts = () => {
  return (
    <AppStyled>
      <Container>
        <AddContact />
        <ContactsStyled>Contacts:</ContactsStyled>
        <ContactsFilter />
        <ContactsList />
      </Container>
    </AppStyled>
  );
};
export default Contacts;
