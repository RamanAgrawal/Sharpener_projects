import classes from './Cart.module.css'
import Model from '../../UI/Model'
import { useContext } from 'react'
import FoodContext from '../../../store/FoodContext'
import CartContext from '../../../store/CartContext'
const Cart = props => {
    const foodctx=useContext(FoodContext)
    const cartCtx=useContext(CartContext)
    const hasItem=cartCtx.items.length>0
   
    const cartItems = <ul>{cartCtx.items.map(item => (
        <li key={item.id}>{item.name} {item.amount} x {item.price} = {item.amount*item.price}</li>
        ))}</ul>
        // console.log(cartItems)
    return <Model>
    <div >
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={foodctx.HideCartHandler}>Close</button>
           {hasItem&& <button>Order</button>}
        </div>
    </div>
    </Model>
}

export default Cart