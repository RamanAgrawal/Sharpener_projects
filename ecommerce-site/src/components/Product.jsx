import React from 'react'
import { Card } from 'react-bootstrap'
const Product = ({prod}) => {
  return (
    <div>
<Card>
    <Card.Img variant='top' src={prod.imageUrl} alt={prod.title} />
    <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Subtitle>
            ${prod.price}
        </Card.Subtitle>
    </Card.Body>
</Card>
    </div>
  )
}

export default Product