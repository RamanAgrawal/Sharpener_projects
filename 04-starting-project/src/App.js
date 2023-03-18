import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const userLoggedinInfo=localStorage.getItem('isLogged');
useEffect(()=>{

  if (userLoggedinInfo==='1') {
    setIsLoggedIn(true)
  }
},[])
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways 
    localStorage.setItem('isLogged','1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLogged')
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn:isLoggedIn,
      onLogout:logoutHandler
      }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
