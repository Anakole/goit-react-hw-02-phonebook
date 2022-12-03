import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmit = (name, number) => {
    this.setState(prevState => ({
      contacts: [{ name, number }, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
