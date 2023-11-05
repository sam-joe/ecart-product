import styled from "styled-components";

import ProductBox from "../../components/ProductBox/ProductBox";
import { IProduct } from "../../interfaces/ProductInterface";

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

const ProductList = ({ products }: { products: IProduct[] }) => {
  return (
    <Wrapper>
      <div className="listing">
        {products.map((el) => {
          return <ProductBox key={el.id} {...el} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ProductList;
