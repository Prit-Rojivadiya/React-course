import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  // Different solution of avoind adding <div> in return

  // Solution 1: It can accept array of jsx element in return
  // return [
  //   error && (
  //     <ErrorModal
  //       key="errorModal"
  //       title={error.title}
  //       message={error.message}
  //       onConfirm={errorHandler}
  //     />
  //   ),
  //   <Card key="addUserForm" className={classes.input}>
  //     <form onSubmit={addUserHandler}>
  //       <label htmlFor="username">Username</label>
  //       <input
  //         id="username"
  //         type="text"
  //         value={enteredUsername}
  //         onChange={usernameChangeHandler}
  //       />
  //       <label htmlFor="age">Age (Years)</label>
  //       <input
  //         id="age"
  //         type="number"
  //         value={enteredAge}
  //         onChange={ageChangeHandler}
  //       />
  //       <Button type="submit">Add User</Button>
  //     </form>
  //   </Card>,
  // ];

  // Solution 2 :  create wrapper component
  // return (
  //   <Wrapper>
  //     {error && (
  //       <ErrorModal
  //         key="errorModal"
  //         title={error.title}
  //         message={error.message}
  //         onConfirm={errorHandler}
  //       />
  //     )}
  //     <Card key="addUserForm" className={classes.input}>
  //       <form onSubmit={addUserHandler}>
  //         <label htmlFor="username">Username</label>
  //         <input
  //           id="username"
  //           type="text"
  //           value={enteredUsername}
  //           onChange={usernameChangeHandler}
  //         />
  //         <label htmlFor="age">Age (Years)</label>
  //         <input
  //           id="age"
  //           type="number"
  //           value={enteredAge}
  //           onChange={ageChangeHandler}
  //         />
  //         <Button type="submit">Add User</Button>
  //       </form>
  //     </Card>
  //   </Wrapper>
  // );

  // Solution 3: Using fragements
  return (
    // <React.Fragment>
    <>
      {error && (
        <ErrorModal
          key="errorModal"
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card key="addUserForm" className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
    // </React.Fragment>
  );
};

export default AddUser;

/* 

line: 123 and 125 inputs are non controlled components
because it is not controller by react
we are using react (useRef) but we are not modifying any state
we are getting and updating value from DOM element


*/
