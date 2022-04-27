import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const Scrolll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Imagee = styled.img`
  height: 5.875rem;
  display: flex;
  margin-bottom: 0.625rem;
  cursor: pointer;
`;
const Info = styled.div``;

const ArrowTop = styled.img`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
const ArrowBottom = styled.img``;
const ProductImage = styled.img``;

const SelectedImage = styled.div``;

const BigImage = styled.img`
  height: 34.75rem;
  width: 26.875rem;
`;

const Scroll = () => {
  return (
    <Wrapper>
      <Scrolll>
        <ArrowTop src={require("../img/icons/arrowtop.png")} />
        <Imagee src={require("../img/product/product.png")}></Imagee>
        <Imagee src={require("../img/product/product.png")}></Imagee>
        <Imagee src={require("../img/product/product.png")}></Imagee>
        <Imagee src={require("../img/product/product.png")}></Imagee>
        <Imagee src={require("../img/product/product.png")}></Imagee>
        <ArrowBottom src={require("../img/icons/arrowbottom.png")} />
      </Scrolll>
      <SelectedImage>
        <BigImage src={require("../img/product/prod.svg")} />
      </SelectedImage>
      <Info></Info>
    </Wrapper>
  );
};

export default Scroll;
