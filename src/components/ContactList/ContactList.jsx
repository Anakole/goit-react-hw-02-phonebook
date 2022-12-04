import { ContactsItem } from './ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <ContactsItem
            name={name}
            number={number}
            onDelete={onDeleteContact}
          />
        </Item>
      ))}
    </List>
  );
};
