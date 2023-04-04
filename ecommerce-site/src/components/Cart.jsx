import React from 'react'
import { CartContext } from '../context/CartContext'
import './Cart.css'
import { Button } from 'react-bootstrap'
import CartItem from './CartItem'
const Cart = () => {
    const { items, removeItemHandler, cartQuantity, total } = CartContext()
    return (
        <div className='cart-container'>
            <div className='cart-outer'>
                <h2>Shopping Cart</h2>
                <p>price</p>
                <hr />
                <ul>
                    {items.map(prod => (
                       <CartItem prod={prod} removeItemHandler={removeItemHandler} />
                    ))}
                </ul>
                <h6 style={{ textAlign: "right" }}>Subtotal ({cartQuantity} item): ${total}</h6>
            </div>
            <div className='cart-price'>
                <h3>Subtotal ({cartQuantity} item): ${total} </h3>
                <div className="d-grid gap-2">
                    <Button variant='warning'> Proceed to Buy</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart