import { Component } from 'react';
import { Form, Label, Text } from './ContactForm.styles';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  static = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    const handleSubmit = this.handleSubmit;
    const handleInputChange = this.handleInputChange;
    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="">
          <Text>Name</Text>
          <input
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </Label>

        <Label htmlFor="">
          <Text>Phone</Text>
          <input
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </Label>

        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default ContactForm;
