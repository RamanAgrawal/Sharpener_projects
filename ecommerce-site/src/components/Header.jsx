import React from 'react'
import { Container, Navbar, Dropdown, Badge,Nav, Button } from 'react-bootstrap'
import CartDropDown from './Cart/CartDropDown'
import {  NavLink } from 'react-router-dom'
import {FaCartPlus} from 'react-icons/fa'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const {isLoggedIn,logout}=AuthContext()
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
        <Nav >
          {!isLoggedIn&&<NavLink to='/login'><Button variant='link' style={{color:'white'}}>Login</Button></NavLink>}
          {isLoggedIn&&<NavLink to='/profile' className='ml-10'><Button >Change Password</Button></NavLink>}
          {isLoggedIn&&<NavLink to='/login' className='ml-10'><Button onClick={logout}>LogOut</Button></NavLink>}
          {isLoggedIn&&<Dropdown >
            <Dropdown.Toggle  variant="success" id="dropdown-basic">
              <FaCartPlus />
              <Badge>{cartQuantity}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu  align="end" style={{width:300}}>
              <CartDropDown />
            </Dropdown.Menu>
          </Dropdown>}
        </Nav>
      </Container>


    </Navbar>
  )
}

export default Header