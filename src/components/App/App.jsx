import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Box, ContactsTitle, NoContacts, PhonebookTitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const conditionCheckName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const conditionCheckNumber = this.state.contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );

    if (conditionCheckName || conditionCheckNumber) {
      alert(`This name or number is already in your contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  deleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.name.toLowerCase() !== name.toLowerCase()
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Box>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm onSubmit={this.formSubmit} />

        <ContactsTitle>Contacts</ContactsTitle>

        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactsList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </>
        ) : (
          <NoContacts>You have no contacts</NoContacts>
        )}
      </Box>
    );
  }
}
