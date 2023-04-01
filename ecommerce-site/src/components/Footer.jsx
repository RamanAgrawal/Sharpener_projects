import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Footer = () => {
  return (
    <Card bg='red' variant='dark'>
        <Card.Header variant='dark'>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
       
      </Card.Body>
    </Card>
  )             
}

export default Footer