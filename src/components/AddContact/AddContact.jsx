import React, { useMemo, useState } from 'react';
import {
  AddContactStyled,
  Label,
  Input,
  Button,
  ContainerInput,
} from './AddContact.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations/operations';
import { itemsSelector, loaderSelector } from 'redux/selector/selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { errorRequestelector } from 'redux/selector/selector';
import Loader from 'components/Loader/Loader';

const AddContact = () => {
  const [number, setPhone] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const contactSelector = useSelector(itemsSelector);
  const addContactError = useSelector(errorRequestelector);
  const loader = useSelector(loaderSelector);

  const onChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setPhone('');
    setName('');
  };

  const onAddContact = ({ name, number }) => {
    if (
      contactSelector.find(obj => obj.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number })).then(() => reset());
  };

  useMemo(() => {
    if (addContactError === null) {
      return;
    }

    toast.error(addContactError, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }, [addContactError]);

  return (
    <>
      <AddContactStyled
        onSubmit={e => {
          e.preventDefault();
          onAddContact({ name, number });
        }}
      >
        <ContainerInput>
          <Label htmlFor="name">
            Name
            <Input
              onChange={onChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              onChange={onChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </ContainerInput>
        <Button type="submit">
          {loader === 'addContact' ? <Loader /> : 'Add contact'}
        </Button>
      </AddContactStyled>
      {addContactError !== null && (
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
export default AddContact;
