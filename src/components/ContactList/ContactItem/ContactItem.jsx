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
