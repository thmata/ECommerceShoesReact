import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 20px 20px 20px;
`;
const Header = styled.div``;
const Title = styled.h1``;
const Code = styled.div``;
const PriceContainer = styled.div``;
const DividePrice = styled.div`
  color: #7f7f7f;
  font-weight: 400;
  font-size: 12px;
`;
const Price = styled.div`
  margin-top: 54px;
  display: flex;
  text-align: center;
`;
const LastPrice = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #e35442;
  text-decoration-line: line-through;
`;
const RealPrice = styled.div`
  margin-left: 10px;
  font-weight: 700;
  font-size: 20px;
  color: #686868;
`;

const ColorContainer = styled.div`
  margin-top: 50px;
`;
const ColorLetter = styled.div`
  display: flex;
`;
const ColorSelector = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;
const SelectedColor = styled.div`
  margin-left: 15px;
  color: #5f75aa;
`;

const Red = styled.img`
border-radius 100%;
  border: 1px solid #DE8F75;
`;
const Blue = styled.img``;
const Brow = styled.img``;
const Black = styled.img``;

const ProductInfo = () => {
  return (
    <Container>
      <Header>
        <Title>RASTEIRA TIRA DEDO</Title>
        <Code>RT 0568 | 03.07.0653</Code>
      </Header>
      <PriceContainer>
        <Price>
          <LastPrice>R$ 69,90 | </LastPrice>
          <RealPrice> R$ 55,20 </RealPrice>
        </Price>
        <DividePrice>Ou 6x de R$ 9,20</DividePrice>
      </PriceContainer>
      <ColorContainer>
        <ColorLetter>
          Color: <SelectedColor>(Fucsia)</SelectedColor>
        </ColorLetter>
        <ColorSelector>
          <Red src={require("../img/Colors/vinho.png")} />
          <Blue src={require("../img/Colors/azul.png")} />
          <Brow src={require("../img/Colors/marrom.png")} />
          <Black src={require("../img/Colors/preto.png")} />
        </ColorSelector>
      </ColorContainer>
    </Container>
  );
};

export default ProductInfo;
