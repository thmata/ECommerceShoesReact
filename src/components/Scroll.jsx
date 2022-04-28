import React from "react";
import styled from "styled-components";
import ShoesSvg from "../img/product/prod.svg";
import ProductInfo from "./ProductInfo";

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

const ArrowTop = styled.img`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ArrowBottom = styled.img`
  cursor: pointer;
`;

const SelectedImage = styled.div`
  margin-left: 52px;
`;

const BigImage = styled.img`
  height: 34.75rem;
  width: 26.875rem;
`;

const InfoContainer = styled.div`
  height: 34.563rem;
  width: 40.75rem;
  border: 2px solid #d2e1df;
  margin-left: 10rem;
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
        <BigImage src={ShoesSvg} />
      </SelectedImage>
      <InfoContainer>
        <ProductInfo />
      </InfoContainer>
    </Wrapper>
  );
};

export default Scroll;
