import styled from "styled-components";
import CategoryTag from "../../components/CategoryTag/CategoryTag";
import { Button, Rate } from "antd";
import { fontMediumLight } from "../../assets/styles/CommonStyled";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { GET } from "../../service/api";

const Wrapper = styled.section`
  max-width: 102.4rem;
  margin: 2rem auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .image-holder {
    display: grid;
    place-items: center;
    max-height: 40rem;
    img {
      max-height: 40rem;
    }
  }
  .product-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .action-btns {
    display: flex;
    gap: 2rem;
    button {
      min-height: 4.4rem;
      ${fontMediumLight}
      &:hover,&:active {
        border: 1px solid transparent !important;
        color: var(--NEUTRAL-1) !important;
      }
    }
    .buy-now {
      background-color: var(--PRIMARY);
    }
    .add-to-cart {
      background-color: var(--SECONDARY);
    }
  }
`;

const ProductDetails = () => {
  const { id = 0 } = useParams();
  const dispatch = useAppDispatch();
  const { selectedProduct } = useAppSelector((state) => state.ProductSlice);
  useEffect(() => {
    dispatch(GET("products/details", `/${id}`)());
  }, [id]);
  return (
    <Wrapper>
      <div className="image-holder">
        {selectedProduct.thumbnail && <img src={selectedProduct.thumbnail} />}
      </div>
      <div className="product-details">
        <div className="categories">
          <CategoryTag>{selectedProduct.category}</CategoryTag>
        </div>
        <h2>{selectedProduct.brand}</h2>
        <h3>{selectedProduct.title}</h3>

        <p>{selectedProduct.description}</p>
        <div>
          Rating: <Rate allowHalf value={selectedProduct.rating} />
        </div>
        <p>
          Price: <span className="price">{selectedProduct.price}$</span>
        </p>

        <div className="action-btns">
          <Button className="buy-now">Buy Now</Button>
          <Button className="add-to-cart">Add to Cart</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetails;
