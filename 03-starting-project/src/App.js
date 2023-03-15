import React from 'react';
import UserDetails from './components/AddUser/UserDetails'
import UserList from './components/AddUser/UserList';
import { useState } from 'react';
import ErrorModel from './components/UI/ErrorModel';

function App() {
  const [usersList, setUserList] = useState([])
  const addUserHandler = (uName, uage) => {
    setUserList(prev => {
      console.log('kfk')
      return [...prev, { name: uName, age: uage,id:Math.random().toString() }]
    })
  }
  return (
    <div>
      {/* <ErrorModel/> */}
      <UserDetails onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
