import styled from "styled-components";
import LandingHeader from "./LandingHeader";
import { Outlet } from "react-router-dom";

const OutletWrapper = styled.main`
  min-height: calc(100% - 6.5rem);
  max-height: calc(100% - 6.5rem);
  overflow-y: auto;
`;

const LandingLayout = () => {
  return (
    <>
      <LandingHeader />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

export default LandingLayout;
