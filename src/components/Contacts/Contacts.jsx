import AddContact from '../AddContact/AddContact';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { AppStyled, Container, ContactsStyled } from './Contacts.styled';
import { userTokenSelector } from 'redux/selector/selector';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginCurrentUser } from 'redux/operations/operations';

const Contacts = () => {
  const userToken = useSelector(userTokenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken === '') {
      return;
    }
    dispatch(loginCurrentUser(userToken));
  }, [dispatch, userToken]);

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
