import { register } from 'components/redux/auth/authOperations'
import React from 'react'
import { useDispatch } from 'react-redux'
import { RegisterForm, RegisterFormButton, RegisterFormContainer, RegisterInput, RegisterLabel, RegisterLogInTitle, RegisterPreTitle, RegisterPreTitleApp, RegisterText, RegisterTitle } from './Register.styled'

const Register = () => {
  const dispatch = useDispatch()
    const handleButtonSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: e.currentTarget.elements.name.value,
            email: e.currentTarget.elements.email.value,
            password: e.currentTarget.elements.password.value
      }
      dispatch(register(formData))
      e.target.reset()
}


  return (
      <RegisterFormContainer>
        <RegisterPreTitle>Welcome to <RegisterPreTitleApp>CONTACT</RegisterPreTitleApp></RegisterPreTitle>
        <RegisterText>Have an Account ? <RegisterLogInTitle to='/login'>Sign in</RegisterLogInTitle></RegisterText>
        <RegisterTitle>Sign up</RegisterTitle>
        <RegisterForm onSubmit={handleButtonSubmit}>
          <RegisterLabel>Enter your email address
            <RegisterInput placeholder='User email address' type="email" name="email" />
          </RegisterLabel>
          <RegisterLabel>User name
            <RegisterInput placeholder='User name' type="text" name="name"/>
          </RegisterLabel>
          <RegisterLabel>Enter your Password
            <RegisterInput placeholder='Password' type="password" name="password" />
          </RegisterLabel>
          <RegisterFormButton  type="submit">Sign up</RegisterFormButton>
    </RegisterForm>
      </RegisterFormContainer>
  )
}

export default Register