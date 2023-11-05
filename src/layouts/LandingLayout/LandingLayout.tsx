import styled from "styled-components";
import LandingHeader from "./LandingHeader";
import Product from "../../pages/Product/Product";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import About from "../../pages/About/About";

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
        <Product />
        {/* <ProductDetails /> */}
        {/* <About /> */}
      </OutletWrapper>
    </>
  );
};

export default LandingLayout;
