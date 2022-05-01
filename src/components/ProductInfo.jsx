import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

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
  border: 1px solid #de8f75;
  border-radius: 100%;
`;
const Blue = styled.img``;
const Brow = styled.img``;
const Black = styled.img``;
const SizeContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-right: 38px;
  justify-content: space-between;
`;

const SizeLetter = styled.div``;
const SizeNumber = styled.span`
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  color: #5f75aa;
`;
const SizeGuide = styled.div`
  color: #de8f75;
  text-decoration: underline;
`;

const NumberContainer = styled.div`
  margin-top: 5px;
  display: flex;
`;
const NumberSelection = styled.div`
  background-color: ${(props) => props.bcolor};
  display: flex;
  justify-content: center;
  padding: 6px;
  border: 1px solid #ebebeb;
  color: ${(props) => props.color};
  /* background: #${(props) => props.color}; */
  font-weight: ${(props) => props.weight};
  font-size: 14px;
  margin-right: 3px;
  cursor: pointer;
`;

const ButtonBag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #32917b;
  border-radius: 3px;
  height: 3.75rem;
  width: 25.25rem;
  color: white;
  font-weight: 18px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 2.5rem;
`;

const DescriptionContainer = styled.div`
  margin-top: 20px;
`;
const Description = styled.div``;

const ProductInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
      <SizeContainer>
        <SizeLetter>
          Tamanho: <SizeNumber>(37)</SizeNumber>{" "}
        </SizeLetter>
        <SizeGuide>Guia de Medidas</SizeGuide>
      </SizeContainer>
      <NumberContainer>
        <NumberSelection color="#5F75AA">33</NumberSelection>
        <NumberSelection color="#5F75AA">34</NumberSelection>
        <NumberSelection color="#5F75AA">35</NumberSelection>
        <NumberSelection color="#5F75AA">36</NumberSelection>
        <NumberSelection bcolor="#DE8F75" weight="600" color="white">
          37
        </NumberSelection>
        <NumberSelection color="#5F75AA">38</NumberSelection>
        <NumberSelection color="#5F75AA">39</NumberSelection>
        <NumberSelection color="#5F75AA">40</NumberSelection>
        <NumberSelection color="#5F75AA">41</NumberSelection>
        <NumberSelection color="#5F75AA">42</NumberSelection>
      </NumberContainer>
      <ButtonContainer>
        <ButtonBag onClick={() => setModalVisible(true)}>
          ADICIONAR À SACOLA
        </ButtonBag>
        {modalVisible ? <Modal onClose={() => setModalVisible(false)} /> : null}
        {/* {modalVisible ? <Modal onClose={() => setModalVisible(false)} /> : null} */}
      </ButtonContainer>
      <DescriptionContainer>
        <Description>
          Rasteira em atanado soft com tira no dedo e fechamento de fivela.
          Possui sola sempre na cor do cabedal.
        </Description>
      </DescriptionContainer>
    </Container>
  );
};

export default ProductInfo;
