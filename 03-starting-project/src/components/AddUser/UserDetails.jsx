import './UserDetails.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel'
import { useState } from 'react'
const UserDetails = (props) => {
    const [enteredUserName, setUserName] = useState('')
    const [enteredAge, setUserAge] = useState('')
    const [error, setError] = useState('')
    const addNewUser = e => {
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "please enter details"
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "please enter age >1"
            })
            return
        }
        props.onAddUser(enteredUserName, enteredAge)
        setUserName('');
        setUserAge('')
    }
    const userNameChangeHandler = e => {
        setUserName(e.target.value)
    }
    const userAgeChangeHandler = e => {
        setUserAge(e.target.value)
    }
    const errorHandler=()=>{
        setError(null)
    }
    return <div className='cover'>
            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card classes={'form'}>
                <form action="" onSubmit={addNewUser}>
                    <div className="form-control">
                        <div className="form-control">
                            <label htmlFor="name" >Name</label>
                            <input id='name' type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                            <label htmlFor="age">Age</label>
                            <input id='age' type="number" value={enteredAge} onChange={userAgeChangeHandler} />
                        </div>
                    </div>
                    {/* <div className="new-expense__actions"> */}
                    <Button type='submit'>Add User</Button>
                    {/* </div> */}
                </form>
            </Card>
        </div>

        }

        export default UserDetails