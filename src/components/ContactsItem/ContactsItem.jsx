import PropTypes from 'prop-types';
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
          dispatch(deleteContact(id));
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
