import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import LogOut from 'components/LogOut/LogOut'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <Tabs isLazy>
  <TabList>
        <Tab><NavLink to={'/'}>Home</NavLink></Tab>
        {isLoggedIn ?
        <>
          <Tab><NavLink to={'/contacts'}>Contacts</NavLink></Tab>
          <Tab><NavLink to={'/'}><LogOut/></NavLink></Tab>
          </> :
          <>
            <Tab><NavLink to={'/login'}>Login</NavLink></Tab>
          <Tab><NavLink to={'/register'}>Registration</NavLink></Tab>
          </>}
  </TabList>
  <TabPanels>
    {/* initially mounted */}
    <TabPanel>
      <p>Home!</p>
    </TabPanel>
    {/* initially not mounted */}
    <TabPanel>
      <p>Contacts!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default HomePage