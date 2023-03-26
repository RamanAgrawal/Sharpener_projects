import classes from './MealsItems.module.css'
import MealsForm from './MealsForm';
import CartContext from '../../../store/CartContext'
import { useContext } from 'react';
const MealsItems = props => {
    const cartCtx=useContext(CartContext)
    const price = `${props.price.toFixed(2)}Rs`;

    const AddtoCartHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount,
        })
        
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsForm onAddtoCart={AddtoCartHandler}/>
            </div>
        </li>
    )
}
export default MealsItems