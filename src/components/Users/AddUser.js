import React, { useState,useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const userEnteredName=useRef();
  const userEnteredAge=useRef();
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const name=userEnteredName.current.value;
    const age=userEnteredAge.current.value;
    if (name.trim().length == 0 || age.trim().length == 0) {
      setError({ title: "Invalid Input", message: "enter a non-empty values" });
      return;
    }
    if (age < 1) {
      setError({ title: "Invalid Input", message: "enter a valid age >1" });
      return;
    }
    props.onAddUser(name, age);
    ;
    userEnteredName.current.value='';
    userEnteredAge.current.value='';
    
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            ref={userEnteredName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={userEnteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
