import React from 'react'
import '../style.css'
import { AiOutlineMinusSquare } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
// import { CartContext } from '../context/CartContext'

import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
const CartDropDown = () => {
  const { items, total, removeItemHandler } = CartContext()


  const removeItem = (item) => {
    removeItemHandler(item)
  }
  return (<>
    <ul style={{ paddingLeft: '1rem' }}>
      {items.map(prod => (
        <li className='cart-item' key={prod.id}>
          <img className='cart-img' src={prod.imageUrl} alt="" />
          <div>
            <h2>{prod.name}</h2>
            <div className='summary'>
              <span className='price'>{prod.price}rs</span>
              <span className='amount'>x {prod.quantity}</span>
            </div>
          </div>

          <button className='actions' onClick={() => { removeItem(prod) }} ><AiOutlineMinusSquare /></button>


        </li>
      ))}
    </ul>
    {items.length ? <h3 style={{ textAlign: "end" }}>Total-${total}</h3>: <h3 style={{ textAlign: 'center' }}>Cart Is Empty</h3>}
    <div className='button'>
      <Button variant='success'>
        <NavLink to='/cart' style={
          { color: 'white' }}>
          Go to Cart
        </NavLink>
      </Button>
    </div>
  </>
  )
}

export default CartDropDown