import { Button } from "antd";
import styled from "styled-components";
import CardWrapper from "../../components/CardWrapper/CardWrapper";
import { fontMediumDark } from "../../assets/styles/CommonStyled";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContextStore } from "../../Context/LoginContext";

const FormWrapper = styled.form`
  width: 100%;
  min-width: 35rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    ${fontMediumDark}
    font-size:2rem;
  }
  div {
    margin-bottom: 1rem;
    label {
      display: block;
      ${fontMediumDark}
      font-size:1.4rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
    input {
      width: 100%;
      padding: 1rem;
      border: 0.1rem solid var(--PRIMARY);
      border-radius: 1rem;
    }
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loggedin, setLoggedIn } = useContext(LoginContextStore);

  useEffect(() => {
    if (loggedin) navigate("/home");
  }, [loggedin]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoggedIn(true);
    if (username.length > 4 && password.length > 8) {
      localStorage.setItem("loggedin", "true");
      navigate("home");
    }
  };
  return (
    <CardWrapper>
      <FormWrapper onSubmit={handleFormSubmit}>
        <h2>Sign In</h2>
        <div>
          <label>username:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div>
          <Button htmlType="submit">Sign In</Button>
        </div>
      </FormWrapper>
    </CardWrapper>
  );
};

export default Login;
