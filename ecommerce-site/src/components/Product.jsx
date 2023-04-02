import React from 'react'
import './style.css'
import { Card ,Button} from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

const Product = ({ prod }) => {
    const {addItemHandler}=CartContext()
    // console.log(prod);
    const additem=()=>{
        addItemHandler({...prod,quantity:1})
    }
    return (
        <div>
            <Card  key={prod.id} className='prod-container m-3' >
                <div className='img'><Card.Img className='prod-img' variant='top' src={prod.imageUrl} alt={prod.title} /></div>
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Subtitle>
                        ${prod.price}
                        <Button onClick={additem} variant='success' style={{float:'right'}}>Add To cart</Button>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product