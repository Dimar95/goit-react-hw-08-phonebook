import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  Li,
  Button,
  PhoneStyle,
  Name,
  ContainerOneContact,
} from './ContactsItem.styled';
import { deleteContact } from '../../redux/operations/operations';
import { useDispatch } from 'react-redux';

const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const classTogle = e => {
    const currentButton = e.target;
    currentButton.textContent = 'Delete...';
    return;
  };

  return (
    <Li>
      <ContainerOneContact>
        <Name>{name}</Name>
        <PhoneStyle>{number}</PhoneStyle>
      </ContainerOneContact>
      <Button
        type="button"
        onClick={e => {
          dispatch(deleteContact(id)).then(data => {
            Notify.info(`Contact ${data.payload.name} removed`);
          });
          classTogle(e);
        }}
      >
        Delete
      </Button>
    </Li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
