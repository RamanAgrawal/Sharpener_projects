import React from 'react'
import './style.css'
import {MdDelete} from 'react-icons/md'
import { Button } from 'react-bootstrap'
const CartDropDown = () => {
    const item=[{

        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }]
  return (<>
    <ul style={{paddingLeft:'1rem'}}>
        {item.map(prod=>(
            <li className='cart-item'>
                <img className='cart-img' src={prod.imageUrl} alt="" />
            <div>
              <h2>{prod.name}</h2>
              <div className='summary'>
                <span className='price'>{prod.price}rs</span>
                <span className='amount'>x {prod.quantity}</span>
              </div>
            </div>
           
              <button className='actions' ><MdDelete/></button>
              
            
          </li>
        ))}
    </ul>
    <div className='button'>
    <Button>Buy Now</Button>
    </div>
    </>
  )
}

export default CartDropDown