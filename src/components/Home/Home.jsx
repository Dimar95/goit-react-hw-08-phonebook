import AddContact from '../AddContact/AddContact';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { AppStyled, Container, ContactsStyled } from './Home.styled';
const Home = () => {
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
export default Home;
