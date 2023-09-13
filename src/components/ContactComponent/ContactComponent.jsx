import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { RegisterFormContainer, RegisterPreTitle, RegisterPreTitleApp } from 'components/Register/Register.styled';
import { Container } from './ContactComponent.styled';
// import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const ContactComponent = () => {
  return (
    <RegisterFormContainer>
      {/* <PerfectScrollbar> */}
      <Container>
        <RegisterPreTitle>My Very Own <RegisterPreTitleApp>Phone Book</RegisterPreTitleApp></RegisterPreTitle>
      <ContactForm/>
      <RegisterPreTitle>Contacts</RegisterPreTitle>
      <Filter/>
      <ContactList/>
      </Container>
      {/* </PerfectScrollbar> */}
      <ToastContainer />
      </RegisterFormContainer>
  )
}

export default ContactComponent