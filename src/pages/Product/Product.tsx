import styled from "styled-components";
import ProductList from "./ProductList";
import { Pagination } from "antd";

const Wrapper = styled.div`
  .pagination {
    width: 100%;
    height: 10rem;
    display: grid;
    place-items: center;
  }
`;

const Product = () => {
  return (
    <Wrapper>
      <ProductList />
      <div className="pagination">
        <Pagination
          size="default"
          showLessItems={true}
          showSizeChanger={false}
          pageSize={10}
          total={500}
          defaultCurrent={1}
        />
      </div>
    </Wrapper>
  );
};

export default Product;
