import React, { useState } from "react";
import { Button, FormContainer, InputForm } from "./ContactForm.styled";

import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from "store/contacts/contactsThunk";
import { RegisterLabel } from "components/Register/Register.styled";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.myContact.contacts)
  const dispatch = useDispatch()

  const handleInputChange = e => {
    e.target.name === "name" ? setName(e.target.value) : setNumber(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault()
    if (contacts.items.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`${name} is already in contact !`, {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    };

    dispatch(addContact({
      name,
      number,
    }))

    toast.success(`You add contact ${name} to your phonebook.`, {
      position: toast.POSITION.TOP_CENTER
    });

    e.target.reset()
  };
  
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <RegisterLabel>Name
          <InputForm
            type="text"
            placeholder="Name"
            name="name"
            title="Name"
            required
            onChange={handleInputChange}
          />
        </RegisterLabel>
        <RegisterLabel>Number
          <InputForm
            type="tel"
            name="phone"
            placeholder="Number"
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number"
            required
            onChange={handleInputChange}
          />
        </RegisterLabel>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </div>
  );
};
 
export default ContactForm;