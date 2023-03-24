import classes from './MealsForm.module.css'
import Input from '../../UI/Input'
const MealsForm =()=>{
    return <form className={classes.form}>
        <Input label={"Amount"} input={{
            
            id:'amount',
            type:'number',
            min:'1',
            max:"6",
            step:'1',
            DefaultValue:'1'
        }}/>
        <button >+ Add</button>
    </form>
}

export default MealsForm