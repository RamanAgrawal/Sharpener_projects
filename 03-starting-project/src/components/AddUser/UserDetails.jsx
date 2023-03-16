import './UserDetails.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModel from '../UI/ErrorModel'
import { useState, useRef } from 'react'
const UserDetails = (props) => {

    const nameRef = useRef('')
    const ageRef = useRef('')
    const collegeRef = useRef('')
    const [error, setError] = useState('')
    const addNewUser = e => {
        e.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredUserAge = ageRef.current.value;
        const enteredCollege = collegeRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "please enter details"
            })
            return
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "please enter age > 1"
            })
            return
        }
        props.onAddUser(enteredName, enteredUserAge,enteredCollege)
        nameRef.current.value=''
        ageRef.current.value=''
        collegeRef.current.value=''
    }

    const errorHandler = () => {
        setError(null)
    }
    return <div className='cover'>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card classes={'form'}>
            <form action="" onSubmit={addNewUser}>
                <div className="form-control">
                    <div className="form-control">
                        <label htmlFor="name" >Name</label>
                        <input id='name' type="text"
                            ref={nameRef} />
                        <label htmlFor="age">Age</label>
                        <input id='age' type="number"
                            ref={ageRef} />
                        <label htmlFor="collge">Collge</label>
                        <input id='collge' type="text"
                            ref={collegeRef} />
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