import { ContactsItem } from './ContactItem/ContactItem';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <ContactsItem
            name={name}
            number={number}
            onDelete={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};
