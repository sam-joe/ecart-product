import styled from "styled-components";
import ProductList from "./ProductList";
import { Pagination } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { GET } from "../../service/api";
import { updateProductQueryParams } from "../../store/Slices/Product.Slice";

const Wrapper = styled.div`
  .pagination {
    width: 100%;
    height: 10rem;
    display: grid;
    place-items: center;
  }
`;

const Product = () => {
  const { products, query_params } = useAppSelector(
    (state) => state.ProductSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    let params = `?limit=${query_params.size}&skip=${
      (query_params.page - 1) * query_params.size
    }`;
    dispatch(GET("products/list", params)());
  }, [query_params.page, query_params.size]);

  const onChangePage = (page: number) => {
    dispatch(updateProductQueryParams({ ...query_params, page: page }));
  };
  return (
    <Wrapper>
      <ProductList products={products} />
      <div className="pagination">
        <Pagination
          size="default"
          showLessItems={true}
          showSizeChanger={false}
          pageSize={query_params.size}
          total={query_params.total}
          onChange={onChangePage}
          current={query_params.page}
        />
      </div>
    </Wrapper>
  );
};

export default Product;
