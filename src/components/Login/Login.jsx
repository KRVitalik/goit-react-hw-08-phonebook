import { login } from 'components/redux/auth/authOperations'
import React from 'react'
import { useDispatch } from 'react-redux'

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
        console.log(formData)
}


  return (
      <form onSubmit={handleButtonSubmit}>
          <input type="email" name="email"/>
          <input type="password" name="password" />
          <button  type="submit">Register me</button>
    </form>
  )
}

export default Login