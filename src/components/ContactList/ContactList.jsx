import { nanoid } from 'nanoid';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number }) => (
        <li key={nanoid()}>
          <p>{name}</p>
          <a href="tel:{number}">{number}</a>
        </li>
      ))}
    </ul>
  );
};
