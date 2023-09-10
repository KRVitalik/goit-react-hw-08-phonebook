import { register } from 'components/redux/auth/authOperations'
import React from 'react'
import { useDispatch } from 'react-redux'

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
        console.log(formData)
}


  return (
      <form onSubmit={handleButtonSubmit}>
          <input type="text" name="name"/>
          <input type="email" name="email"/>
          <input type="password" name="password" />
          <button  type="submit">Register me</button>
    </form>
  )
}

export default Register