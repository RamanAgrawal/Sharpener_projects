import React from 'react'
import { Container, Navbar, Dropdown, Badge } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { BsCartPlusFill } from 'react-icons/bs'
import CartDropDown from './CartDropDown'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Header = () => {
  const {cartQuantity}=CartContext()
  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>

          <a href="#">E-Commerce</a>
        </Navbar.Brand>
        <Nav className="me-auto">
          
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/store'>Store</Link></Nav.Link>
          <Nav.Link><Link to='/about'>About</Link></Nav.Link>
          
        </Nav>
        <Nav>
          <Dropdown >
            <Dropdown.Toggle  variant="success" id="dropdown-basic">
              <BsCartPlusFill />
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