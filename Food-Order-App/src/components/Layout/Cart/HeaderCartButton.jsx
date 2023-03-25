import classes from './HeaderCartButton.module.css'
import CartIcon from './CartIcon'
const HeaderCartButton=props=>{
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>1</span>
    </button>
}

export default HeaderCartButton