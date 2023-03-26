import React from "react";
import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from "./Cart/HeaderCartButton";
import FoodContext from "../../store/FoodContext";
import { useContext } from "react";

const Header=()=>{
    const ctx=useContext(FoodContext)
return (
<React.Fragment>
<header className={classes.header}>
    <h1>Meals</h1>
    <HeaderCartButton onClick={ctx.ShowCartHandler}/>
</header>
<div className={classes['main-image']}>
    <img src={meals} />
</div>

</React.Fragment>
)
}
export default Header