import { login } from 'components/redux/auth/authOperations'
import React from 'react'
import { useDispatch } from 'react-redux'
import { RegisterForm, RegisterFormButton, RegisterFormContainer, RegisterInput, RegisterLabel, RegisterLogInTitle, RegisterPreTitle, RegisterPreTitleApp, RegisterText, RegisterTitle } from 'components/Register/Register.styled'

const Login = () => {
  const dispatch = useDispatch()
  const handleButtonSubmit = (e) => {
    e.preventDefault()
    const formData = {
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value
    }
    dispatch(login(formData))
    e.target.reset()
  }


  return (
      <RegisterFormContainer>
        <RegisterPreTitle>Welcome to <RegisterPreTitleApp>CONTACT</RegisterPreTitleApp></RegisterPreTitle>
        <RegisterText>Have an Account ? <RegisterLogInTitle to='/register'>Sign up</RegisterLogInTitle></RegisterText>
        <RegisterTitle>Sign in</RegisterTitle>
        <RegisterForm onSubmit={handleButtonSubmit}>
          <RegisterLabel>Enter your email address
            <RegisterInput placeholder='User email address' type="email" name="email" />
          </RegisterLabel>
          <RegisterLabel>Enter your Password
            <RegisterInput placeholder='Password' type="password" name="password" />
          </RegisterLabel>
          <RegisterFormButton  type="submit">Sign in</RegisterFormButton>
    </RegisterForm>
      </RegisterFormContainer>
  )
};

export default Login