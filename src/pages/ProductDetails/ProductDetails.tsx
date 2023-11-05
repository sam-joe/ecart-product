import styled from "styled-components";
import { product } from "../../utils/constant";
import CategoryTag from "../../components/CategoryTag/CategoryTag";
import { Button, Rate } from "antd";
import { fontMediumLight } from "../../assets/styles/CommonStyled";

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
  return (
    <Wrapper>
      <div className="image-holder">
        <img src={product.thumbnail} />
      </div>
      <div className="product-details">
        <div className="categories">
          <CategoryTag>{product.category}</CategoryTag>
        </div>
        <h2>{product.brand}</h2>
        <h3>{product.title}</h3>

        <p>{product.description}</p>
        <p>
          Rating: <Rate allowHalf value={product.rating} />
        </p>
        <p>
          Price: <span className="price">{product.price}$</span>{" "}
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
