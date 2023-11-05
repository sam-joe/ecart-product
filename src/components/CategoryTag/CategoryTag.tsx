import styled from "styled-components";
import { fontMediumLight } from "../../assets/styles/CommonStyled";
import React from "react";

const Wrapper = styled.section`
  display: inline-block;
  max-height: 4rem;
  min-width: 10rem;
  padding: 1rem;
  background-color: var(--PRIMARY);
  border-radius: 2rem;

  p {
    font-size: 1.4rem;
    text-transform: uppercase;
    ${fontMediumLight}
  }
`;

const CategoryTag = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  return (
    <Wrapper {...props}>
      <p>{props.children}</p>
    </Wrapper>
  );
};

export default CategoryTag;
