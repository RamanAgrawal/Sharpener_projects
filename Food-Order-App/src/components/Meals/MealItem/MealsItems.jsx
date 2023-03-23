import classes from './MealsItems.module.css'

const MealsItems=props=>{
    const price=`${props.price.toFixed(2)}Rs`;
    return (
        <li className={classes.meals}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
        </li>
    )
}
export default MealsItems