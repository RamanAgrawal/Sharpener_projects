
import { Fragment } from 'react';
import './App.css';
import Navbar from './Header/Navbar';
import Footer from './Footer/Footer';
import NewExpense from './NewExpense';
import SignUp from './Pages/Signup';
import LogIn from './Login';
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux';
import ExpenseList from './ExpensesList/ExpenseList';
function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  const portalElement=document.getElementById('profile')
  return (
    <Fragment>
      {!isLoggedIn&&<SignUp/>}
    {isLoggedIn&& <Navbar />}
      {/* <LogIn/> */}
      
      <Footer/>
      {ReactDOM.createPortal(<NewExpense/>,portalElement)}
      
      <ExpenseList/>

    </Fragment>
  );
}

export default App;
