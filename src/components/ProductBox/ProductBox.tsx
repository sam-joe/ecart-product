import CardWrapper from "../CardWrapper/CardWrapper";
import { IProduct } from "../../interfaces/ProductInterface";
import { Rate } from "antd";
import styled from "styled-components";
import {
  fontMediumDark,
  fontMediumLight,
  fontNormalDark,
} from "../../assets/styles/CommonStyled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(CardWrapper)`
  .product-info {
    cursor: pointer;

    position: relative;
    width: 30rem;
    min-height: 42rem;
    max-height: 42rem;
    .discount {
      position: absolute;
      right: -3rem;
      top: -3rem;
      border-radius: 50%;
      width: 7rem;
      height: 7rem;
      background-color: var(--AUXILIARY-2);
      border: 0.2rem solid var(--NEUTRAL-3);
      display: grid;
      place-items: center;
      p {
        ${fontMediumLight}
      }
    }
    .img-holder {
      min-height: 30rem;
      max-height: 30rem;
      display: grid;
      place-items: center;
      margin-bottom: 2rem;
      img {
        max-height: 30rem;
        max-width: 30rem;
      }
    }
    .product-contents {
      display: flex;
      min-height: 10rem;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-size: 1.8rem;
        ${fontMediumDark}
        color:var(--NEUTRAL-3);
      }
      h3 {
        font-size: 1.6rem;
        ${fontMediumDark}
      }
      p {
        ${fontNormalDark}
        .price {
          ${fontMediumDark}
        }
      }
    }
  }
`;

const ProductBox = (product: IProduct) => {
  const navigate = useNavigate();

  const viewProductDetails = () => {
    navigate("/home/product/" + product.id);
  };
  return (
    <Wrapper onClick={viewProductDetails}>
      <div className="product-info">
        <div className="discount">
          <p>{product.discountPercentage}%</p>
        </div>
        <div className="img-holder">
          {product.thumbnail && <img src={product.thumbnail} />}
        </div>
        <div className="product-contents">
          <h2>{product.brand}</h2>
          <h3>{product.title}</h3>
          <div>
            Rating <Rate allowHalf defaultValue={product.rating} />
          </div>
          <p>
            Price : <span className="price">{product.price} $</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductBox;
