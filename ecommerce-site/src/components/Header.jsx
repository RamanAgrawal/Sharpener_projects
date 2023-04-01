import React from 'react'
import { Container, Navbar,Dropdown, Badge } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}>
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
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Cart
        <Badge>{0}</Badge>
      </Dropdown.Toggle>   

      <Dropdown.Menu style={{minWidth:370}}>
        <span>Cart is empty</span>
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
        </Container>
          
      
    </Navbar>
  )
}

export default Header