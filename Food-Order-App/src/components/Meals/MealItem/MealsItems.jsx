import classes from './MealsItems.module.css'
import MealsForm from './MealsForm';
const MealsItems = props => {
    const price = `${props.price.toFixed(2)}Rs`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsForm />
            </div>
        </li>
    )
}
export default MealsItems