import classes from './Cart.module.css'
import Model from '../../UI/Model'
const Cart = props => {

    const cartItems = <ul>{[{ id: 'c1', name: 'dosa', price: 180, amount: 2 }].map(item => (
        <li>{item.name}</li>
    ))}</ul>
    return <Model>
    <div >
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>1000</span>
        </div>
        <div className={classes.actions}>
            <button >Close</button>
            <button >Order</button>
        </div>
    </div>
    </Model>
}

export default Cart