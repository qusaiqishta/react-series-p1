import React ,{useState,Fragment}from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [usersList,setUsersList]=useState([]);
  const addUserHandler=(name,age)=>{
 setUsersList(prevState=>{
   return[...prevState,{name:name,age:age,id:Math.random()}]
 })
  }
  return (
   <Fragment>
  <AddUser onAddUser={addUserHandler} />
  <UserList users={usersList}/>
   </Fragment>
  );
}

export default App;
