import styled from "styled-components";
import BrandIcon from "../../components/Icons/BrandIcon";
import { useContext } from "react";
import { LoginContextStore } from "../../Context/LoginContext";
import { NavLink, useNavigate } from "react-router-dom";

const Wrapper = styled.header`
  min-height: 6.5rem;
  max-height: 6.5rem;
  background-color: var(--NEUTRAL-2);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    cursor: pointer;
  }
  .links {
    display: flex;
    gap: 1rem;
  }
`;

const LandingHeader = () => {
  const loginContext = useContext(LoginContextStore);
  const { loggedin, setLoggedIn } = loginContext;
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/");
  };
  const handleLogOut = () => {
    setLoggedIn(false);
  };

  return (
    <Wrapper>
      <div className="brand">
        <BrandIcon width="4rem" height="4rem" />
      </div>
      <div className="links">
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"product"}>Product</NavLink>
        <NavLink to={"cart"}>Cart</NavLink>
        {loggedin ? (
          <a onClick={handleLogOut}>Logout</a>
        ) : (
          <a onClick={handleSignIn}>Sign In</a>
        )}
      </div>
    </Wrapper>
  );
};

export default LandingHeader;
