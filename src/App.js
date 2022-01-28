import React ,{useState}from "react";
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
   <div>
  <AddUser onAddUser={addUserHandler} />
  <UserList users={usersList}/>
   </div>
  );
}

export default App;
