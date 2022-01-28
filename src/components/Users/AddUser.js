import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length == 0 || age.trim().length == 0) {
      setError({ title: "Invalid Input", message: "enter a non-empty values" });
      return;
    }
    if (age < 1) {
      setError({ title: "Invalid Input", message: "enter a valid age >1" });
      return;
    }
    props.onAddUser(name, age);
    setName("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
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
            value={name}
            onChange={changeNameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={changeAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
