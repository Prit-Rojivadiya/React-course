import React, { useEffect, useState, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log("before use effect");
  // useEffect(() => {
  //   console.log("called");
  //   const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  //   if (storedUserLoggedInInformation === "1") {
  //     // if state is changing then again component will rerender but at that time it will not come inside use effect
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // console.log("after use effect");
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

/* 
  Rules for react hooks
*/

// call only inside react function and custom hooks

// call react hooks at top level of react function and not inside any other function
