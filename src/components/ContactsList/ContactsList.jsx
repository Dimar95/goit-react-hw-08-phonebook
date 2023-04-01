import ContactsItem from '../ContactsItem/ContactsItem';
import { Ul } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { fetchContacts } from '../../redux/operations/operations';
import Loader from 'components/Loader/Loader';
import { filterSelector, loaderSelector } from 'redux/selector/selector';
import { errorRequestelector } from '../../redux/selector/selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactsList = () => {
  const isLoading = useSelector(loaderSelector);
  const filterContactsSelector = useSelector(filterSelector);
  const error = useSelector(errorRequestelector);

  const arrayContact = useSelector(state =>
    state.phonebook.contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(filterContactsSelector.toLowerCase())
    )
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useMemo(() => {
    if (error === null) {
      return;
    }

    toast.error(error, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }, [error]);
  return (
    <>
      <Ul>
        {error && <div>{error}</div>}
        {isLoading === 'fetchContacts' && <Loader />}
        {arrayContact.length === 0 ? (
          <div>
            You don't have saved contacts. To display contacts, add them through
            a special form
          </div>
        ) : (
          arrayContact.map(contact => (
            <ContactsItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          ))
        )}
      </Ul>
      {error !== null && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      )}
    </>
  );
};

export default ContactsList;
