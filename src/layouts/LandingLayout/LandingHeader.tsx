import styled from "styled-components";
import BrandIcon from "../../components/Icons/BrandIcon";

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
  return (
    <Wrapper>
      <div className="brand">
        <BrandIcon width="4rem" height="4rem" />
      </div>
      <div className="links">
        <a href="about">About</a>
        <a href="products">Products</a>
        <a href="card">Cart</a>
        <a href="#">Sign In</a>
      </div>
    </Wrapper>
  );
};

export default LandingHeader;
