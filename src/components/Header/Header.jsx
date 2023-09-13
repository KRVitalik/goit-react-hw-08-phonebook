import LogOut from 'components/LogOut/LogOut'
import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderContainer, StyledLink } from './Header.styled'

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <HeaderContainer>
      <StyledLink to={'/'}>Home</StyledLink>
        {isLoggedIn ?
          <><StyledLink to={'/contacts'}>Contacts</StyledLink>
            <LogOut /></>
          :
         
          <><StyledLink to={'/login'}>Login</StyledLink>
            <StyledLink to={'/register'}>Registration</StyledLink></>
        }
    </HeaderContainer>
  )
};

export default Header