import React from "react";
import styled from "styled-components";
import prod1 from "../img/product/prod.svg";
import prod2 from "../img/product/prod2.svg";

const TitleContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
const Container = styled.div``;
const Title = styled.div`
  color: #de8f75;
  text-transform: uppercase;
  font-size: 22px;
  /* margin-left: 17px; */
`;
const Products = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 17px;
  margin-right: 14px;
  justify-content: space-between;
`;
const Produto01 = styled.div``;
const Img01 = styled.img`
  height: 178.35px;
`;
const Price = styled.div`
  font-size: 12px;
`;
const Divide = styled.div`
  font-size: 10px;
`;
const Produto02 = styled.div``;
const Img02 = styled.img``;

const ButtonScroll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24.21px;
`;

const Circle = styled.div`
  border-radius: 50%;
  border: 2px solid #2a5a75;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  cursor: pointer;
`;
const ButtonLeft = styled.img``;
const Text = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 5px;
  font-size: 14px;
  color: #2a5a75;
  width: 90px;
`;
const ButtonRight = styled.img``;

const OtherProductsMobile = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Quem viu, viu também</Title>
      </TitleContainer>
      <Products>
        <Produto01>
          <Img01 src={prod1} />
          <Price>R$ 204,90</Price>
          <Divide>Ou 6x de R$ 34,15</Divide>
        </Produto01>
        <Produto02>
          <Img02 src={prod2} />
          <Price>R$ 204,90</Price>
          <Divide>Ou 6x de R$ 34,15</Divide>
        </Produto02>
      </Products>
      <ButtonScroll>
        <Circle>
          <ButtonLeft src={require("../img/icons/buttonleft.png")} />{" "}
        </Circle>
        <Text>1 de 10</Text>
        <Circle>
          <ButtonRight src={require("../img/icons/buttonright.png")} />
        </Circle>
      </ButtonScroll>
    </Container>
  );
};

export default OtherProductsMobile;
