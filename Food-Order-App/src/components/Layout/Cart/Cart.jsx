import classes from './Cart.module.css'
import Model from '../../UI/Model'
import { useContext } from 'react'
import FoodContext from '../../../store/FoodContext'
import CartContext from '../../../store/CartContext'
import CartItem from './CartItem'
const Cart = props => {
    const foodctx = useContext(FoodContext)
    const cartCtx = useContext(CartContext)
    const hasItem = cartCtx.items.length > 0
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {

        cartCtx.addItem({ ...item, amount: 1 })
    }
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => (
        <CartItem key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        >
        </CartItem>
    ))}</ul>

    return <Model>
        <div >
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={foodctx.HideCartHandler}>Close</button>
                {hasItem && <button>Order</button>}
            </div>
        </div>
    </Model>
}

export default Cart