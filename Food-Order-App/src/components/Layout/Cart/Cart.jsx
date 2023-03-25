import classes from './Cart.module.css'
import Model from '../../UI/Model'
import { useContext } from 'react'
import FoodContext from '../../../FoodContext'
const Cart = props => {
    const foodctx=useContext(FoodContext)
    const cartItems = <ul>{[{ id: 'c1', name: 'dosa', price: 180, amount: 2 }].map(item => (
        <li key={item.id}>{item.name}</li>
    ))}</ul>
    return <Model>
    <div >
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>1000</span>
        </div>
        <div className={classes.actions}>
            <button onClick={foodctx.HideCartHandler}>Close</button>
            <button >Order</button>
        </div>
    </div>
    </Model>
}

export default Cart