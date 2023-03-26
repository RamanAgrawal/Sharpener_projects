import classes from './MealsForm.module.css'
import Input from '../../UI/Input'
import { useRef, useState } from 'react'

const MealsForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef('')

    const submitHandler = e => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount
        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setAmountIsValid(false)
            return;
        }
        props.onAddtoCart(enteredAmountNum)
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label={"Amount"} input={{

            id: 'amount',
            type: 'number',
            min: '1',
            max: "5",
            step: '1',
            defaultValue: '1'
        }} />
        <button onClick={() => {}}>+ Add</button>
        {!amountIsValid&&<p>please Enter valid amount between 1 to 5</p>}
    </form>
}

export default MealsForm