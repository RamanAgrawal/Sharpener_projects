import React, { useState ,useEffect,useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
const emailReducer=(state,action)=>{
  if(action.type==='Users-Email'){
    return {value:action.val,isValid:action.val.includes('@')}
  }
  if(action.type==='Email-Input-blur'){
    return{value:state.value,isValid:state.value.includes('@')}
  }
  return{value:'',isValid:false}
}
const passReducer=(state,action)=>{
  if(action.type==='Users-Password'){
    return {value:action.val,isValid:action.val.trim().length>6}
  }
  if(action.type==='Password-Input-blur'){
    return{value:state.value,isValid:state.value.trim().length>6}
  }
  return{value:'',isValid:false}
}
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredCollege, setEnteredCollege] = useState('');
  const [collegeIsValid, setCollegeIsValid] = useState();
  // const [passState.value, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


 const [emailState,emailDispatch]=useReducer(emailReducer,{value:'',isValid:null})
 const [passState,passDispatch]=useReducer(passReducer,{value:'',isValid:null})

  useEffect(()=>{
    const identifire=setTimeout(()=>{
      console.log("ff");
      setFormIsValid(
        emailState.isValid&& passState.value.trim().length > 6 && enteredCollege.trim().length>6
      );
    },500)
    return ()=>{
      clearInterval(identifire)
    }
  },[emailState.value,passState.value,enteredCollege])


  const emailChangeHandler = (event) => {
    emailDispatch({type:'Users-Email',val:event.target.value})
  };

  const passwordChangeHandler = (event) => {
    passDispatch({type:'Users-Password',val:event.target.value})
  };
const collegeChangeHandler=e=>{
  setEnteredCollege(e.target.value);
  
}
  const validateEmailHandler = () => {
    emailDispatch({type:"Email-Input-blur"})
  };

  const validatePasswordHandler = () => {
    passDispatch({type:"Password-Input-blur"})
  };
  const validateCollegeHandler = () => {
    setCollegeIsValid(enteredCollege.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value,enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          </div>
           <div
          className={`${classes.control} ${
            collegeIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="college">College Name</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
            
          />
          
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
