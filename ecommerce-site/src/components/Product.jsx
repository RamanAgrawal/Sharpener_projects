import React from 'react'
import './style.css'
import { Card ,Button} from 'react-bootstrap'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Product = ({ prod }) => {
    const {addItemHandler,sendItem}=CartContext()
    // console.log(prod);
    const additem=()=>{
        addItemHandler({...prod,quantity:1})
    }
    const sendItemHandler=()=>{
        sendItem(prod)
    }
    return (
        <div>
            <Card  key={prod.id} className='prod-container m-3' >
                <div className='img'><Link to={`/store/${prod.id}`}><Card.Img onClick={sendItemHandler} className='prod-img' variant='top' src={prod.imageUrl} alt={prod.title} /></Link></div>
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