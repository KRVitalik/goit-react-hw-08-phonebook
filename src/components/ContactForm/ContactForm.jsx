import React, { useState } from "react";
import { Button, FormContainer, InputForm, Label } from "./ContactForm.styled";

import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from "store/contacts/contactsThunk";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(state => state.myContact.contacts)
  const dispatch = useDispatch()

  const handleInputChange = e => {
    e.target.name === "name" ? setName(e.target.value) : setPhone(e.target.value)
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
      phone,
    }))

    toast.success(`You add contact ${name} to your phonebook.`, {
      position: toast.POSITION.TOP_CENTER
    });

    e.target.reset()
  };
  
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Label>Name
          <InputForm
            type="text"
            placeholder="Name"
            name="name"
            title="Name"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Label>Number
          <InputForm
            type="tel"
            name="phone"
            placeholder="Number"
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </div>
  );
};
 
export default ContactForm;