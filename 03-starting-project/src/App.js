import React from 'react';
import UserDetails from './components/AddUser/UserDetails'
import UserList from './components/AddUser/UserList';
import { useState } from 'react';


function App() {
  const [usersList, setUserList] = useState([])
  const addUserHandler = (uName, uage,college) => {
    setUserList(prev => {
    
      return [...prev, { name: uName, age: uage,college:college,id:Math.random().toString() }]
    })
  }
  return (
    <div>
      
      <UserDetails onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
