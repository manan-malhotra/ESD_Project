import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useUser } from './Context/UserContext';


function Header() {
  const { user } = useUser();
  const { setUserContext } = useUser();
  return (
    <>
        <Navbar bg="light" expand="lg" sticky='top'>
            <Navbar.Brand className='p-lg-3'>Academia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant='underline' className="mr-auto">
            
            {user && user.email != null ? (<>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/salary">
              <Nav.Link>Salary</Nav.Link>
            </LinkContainer>
            </>):(<>

          <LinkContainer to="/">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </>)}
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}

export default Header