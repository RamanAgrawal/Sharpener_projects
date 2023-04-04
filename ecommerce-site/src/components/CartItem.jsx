import React from 'react'
import './Cart.css'
import { Button } from 'react-bootstrap'
const CartItem = ({prod,removeItemHandler}) => {
  return (
    <li key={prod.id}>
    <div className='cart'>
        <div ><img src={prod.imageUrl} alt="" /></div>
        <div className='cart-details'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h5>{prod.title}</h5>
                <h5 >${prod.price}</h5>
            </div>
            <span> Qty-{prod.quantity}</span>
            <span>
                <Button onClick={() => { removeItemHandler(prod) }} style={{ margin: "-13px" }} variant="link">Delete</Button>
            </span>
        </div>
    </div>
</li>
  )
}

export default CartItem