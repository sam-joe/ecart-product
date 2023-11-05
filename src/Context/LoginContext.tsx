import { createContext, useState } from "react";

const initailState: any = {
  loggedin: false,
  setLoggedIn: () => {},
};

export const LoginContextStore = createContext(initailState);
const LoginContext = (props: { children: string | JSX.Element }) => {
  const auth = localStorage.getItem("loggedin") === "true" ? true : false;
  const [loggedIn, setLoggedIn] = useState(auth);

  const setloginInStatus = (val: boolean) => {
    if (val) {
      setLoggedIn(true);
      localStorage.setItem("loggedin", "true");
    } else {
      setLoggedIn(false);
      localStorage.setItem("loggedin", "false");
    }
  };
  return (
    <LoginContextStore.Provider
      value={{ loggedin: loggedIn, setLoggedIn: setloginInStatus }}
    >
      {props.children}
    </LoginContextStore.Provider>
  );
};

export default LoginContext;
