import PropTypes from 'prop-types';
import { Button } from '../ContactList.styled';
import { ContactName, ContactTel } from './ContactItem.styled';

export const ContactsItem = ({ name, number, onDelete }) => {
  return (
    <>
      <ContactName>{name}</ContactName>
      <ContactTel href="tel:{number}">{number}</ContactTel>
      <Button type="button" onClick={() => onDelete(name)}>
        Delete
      </Button>
    </>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
