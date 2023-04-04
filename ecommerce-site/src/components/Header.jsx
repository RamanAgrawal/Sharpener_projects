import React from 'react'
import { Container, Navbar, Dropdown, Badge,Nav } from 'react-bootstrap'
import { FaCartPlus } from 'react-icons/fa'
import CartDropDown from './CartDropDown'
import {  NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Header = () => {
  const {cartQuantity}=CartContext()
  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
        <NavLink  to='/'><h2 style={{color:'white'}}>The Generics</h2></NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
          <Nav.Link><NavLink to='/store'>Store</NavLink></Nav.Link>
          <Nav.Link><NavLink to='/about'>About</NavLink></Nav.Link>    
          <Nav.Link><NavLink to='/contect'>Contect Us</NavLink></Nav.Link>    
        </Nav>
        <Nav>
          <Dropdown >
            <Dropdown.Toggle  variant="success" id="dropdown-basic">
              <FaCartPlus />
              <Badge>{cartQuantity}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu  align="end" style={{width:300}}>
              <CartDropDown />
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>


    </Navbar>
  )
}

export default Header