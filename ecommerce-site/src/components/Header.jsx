import React from 'react'
import { Container, Navbar, Dropdown, Badge } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { BsCartPlusFill } from 'react-icons/bs'
import CartDropDown from './CartDropDown'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>

          <a href="#">E-Commerce</a>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Store</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
        <Nav>
          <Dropdown >
            <Dropdown.Toggle  variant="success" id="dropdown-basic">
              <BsCartPlusFill />
              <Badge>{0}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu  align="end">
              <CartDropDown />
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>


    </Navbar>
  )
}

export default Header