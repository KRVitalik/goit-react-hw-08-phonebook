import { logout } from 'components/redux/auth/authOperations'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutName, LogoutStyle } from './LogOut.styled'
import { StyledLink } from 'components/Header/Header.styled'

const LogOut = () => {
  const dispatch = useDispatch()
  const userName = useSelector(state => state.auth.user.name) 
  return (
    <LogoutStyle>
      <LogoutName>Hello &nbsp;{userName}</LogoutName>
      <StyledLink  to='/login' onClick={()=>dispatch(logout())} >Log Out</StyledLink>
    </LogoutStyle>
  )
}

export default LogOut