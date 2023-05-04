import React, { useState } from "react";
import Modal from "../UI/Modal";

function AddUser(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const user = {
      name,
      age,
      id: new Date(),
    };
    console.log(typeof name);
    if (name.length < 2) {
      setErrMsg("Name must be atleast 2 char long");
      setShowModal(true);
    } else if (Number(age) <= 0) {
      setErrMsg("Age cannot be less than 0");
      setShowModal(true);
    } else {
      props.onAddUser(user);
      setErrMsg("");
    }
  };

  const userNameHandler = (event) => {
    setName(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onClose={closeModal} content={errMsg} />
      <form onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input type="text" onChange={userNameHandler} />
        <br />
        <label>Age</label>
        <input type="number" onChange={ageHandler} />
        <br />
        <button>Add User</button>
      </form>
    </>
  );
}

export default AddUser;
