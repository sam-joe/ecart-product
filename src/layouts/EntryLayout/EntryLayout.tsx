import styled from "styled-components";
import Login from "../../pages/Login/Login";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--NEUTRAL-2);
  display: grid;
  place-items: center;
`;

const EntryLayout = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default EntryLayout;
