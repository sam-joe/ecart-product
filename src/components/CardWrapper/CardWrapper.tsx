import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  padding: 0.2rem;
  .background {
    background: var(--NEUTRAL-3);

    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .contents {
    position: relative;
    z-index: 3;
    padding: 1.6rem 1rem;
    background-color: var(--NEUTRAL-1);
  }
  &:hover {
    .background {
      background: linear-gradient(
          94.04deg,
          #bd6fec -2.06%,
          #b1beff 49.69%,
          #76d6f1 101.44%
        ),
        linear-gradient(
          94.04deg,
          #944ebe -2.06%,
          #8093f5 49.69%,
          #48a9c5 101.44%
        );
      animation: bg-animation 3s infinite;
    }
  }
`;

const CardWrapper = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => {
  return (
    <Wrapper {...props}>
      <div className="background" />
      <div className="contents">{props.children}</div>
    </Wrapper>
  );
};

export default CardWrapper;
