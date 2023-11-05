import styled from "styled-components";

import { product } from "../../utils/constant";
import ProductBox from "../../components/ProductBox/ProductBox";

const Wrapper = styled.div`
  padding: 5rem 2rem;
  .listing {
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;
    column-gap: 2rem;
    row-gap: 5rem;
  }
`;

const ProductList = () => {
  let iterator = 10;
  const iArray: number[] = [];

  for (let i = 0; i < iterator; i++) {
    iArray.push(i);
  }
  return (
    <Wrapper>
      <div className="listing">
        {iArray.map((el) => {
          return <ProductBox key={el} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ProductList;
