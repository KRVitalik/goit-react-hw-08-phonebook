import { logout } from 'components/redux/auth/authOperations'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LogOut = () => {
  const dispatch = useDispatch()
  const userName = useSelector(state => state.auth.user.name) 
  return (
    <>
    <span>Hello { userName }</span>
    <span onClick={()=>dispatch(logout())}>Log Out</span>
    </>
  )
}

export default LogOut