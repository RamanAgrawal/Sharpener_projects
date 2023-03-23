import React from "react";
import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from "./Cart/HeaderCartButton";

const Header=()=>{
return (
<React.Fragment>
<header className={classes.header}>
    <h1>Meals</h1>
    <HeaderCartButton/>
</header>
<div className={classes['main-image']}>
    <img src={meals} />
</div>

</React.Fragment>
)
}
export default Header