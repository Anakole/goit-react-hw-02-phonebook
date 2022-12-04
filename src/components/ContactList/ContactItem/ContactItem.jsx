export const ContactsItem = ({ name, number, id, onDelete }) => {
  return (
    <>
      <p>{name}</p>
      <a href="tel:{number}">{number}</a>
      <button type="button" onClick={() => onDelete(name)}>
        Delete
      </button>
    </>
  );
};
