import React from "react";
import styled from "styled-components";
import ShoesSvg from "../img/product/prod.svg";
import Modal from "./Modal";
import ProductInfo from "./ProductInfo";
import prodimg from "../img/product/prod.svg";

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 320px) {
    display: none;
  }
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

const Main = styled.div``;

// MOBILE

const WrapperMobile = styled.div`
  @media (max-width: 320px) {
    margin-top: 10px;
  }
`;

const TitleMobile = styled.div`
  @media (max-width: 320px) {
    font-size: 22px;
    color: #de8f75;
  }
`;

const CodeMobile = styled.div`
  @media (max-width: 320px) {
    text-align: center;
    font-size: 14px;
    color: #7f7f7f;
  }
`;

const HeaderMobile = styled.div`
  @media (max-width: 320px) {
  }
`;

const ImageMobile = styled.img`
  @media (max-width: 320px) {
    width: 250px;
    margin-top: 12px;
  }
`;

const ScrollMobile = styled.div`
  margin-top: -30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 38px;
  margin-right: 36px;
`;
const ImgVideo = styled.img`
  @media (max-width: 320px) {
    cursor: pointer;
  }
`;
const ImgPoint1 = styled.img`
  @media (max-width: 320px) {
    cursor: pointer;
  }
`;
const ImgPoint0 = styled.img`
  @media (max-width: 320px) {
    cursor: pointer;
  }
`;

const ColorContainerMobile = styled.div`
  @media (max-width: 320px) {
    margin-top: 20px;
    margin-left: -20px;
  }
`;

const ColorTextMobile = styled.div`
  @media (max-width: 320px) {
  }
`;

const ColorImgMobile = styled.div`
  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 13px;
  }
`;

const VinhoMobile = styled.img`
  @media (max-width: 320px) {
    border-radius: 50%;
    border: 2px solid #de8f75;
  }
`;

const AzulMobile = styled.img`
  @media (max-width: 320px) {
  }
`;

const MarromMobile = styled.img`
  @media (max-width: 320px) {
  }
`;

const PretoMobile = styled.img`
  @media (max-width: 320px) {
  }
`;

// SIZE

const SizeContainerMobile = styled.div`
  @media (max-width: 320px) {
    display: flex;
    margin-left: -20px;
    justify-content: space-between;
    margin-top: 28px;
  }
`;

const SizeLetterMobile = styled.div`
  @media (max-width: 320px) {
  }
`;

const SizeGuideMobile = styled.div`
  @media (max-width: 320px) {
    color: #de8f75;
    text-decoration: underline;
  }
`;

const NumberContainerMobile = styled.div`
  @media (max-width: 320px) {
    display: flex;
    margin-left: -20px;
    margin-top: 10px;
  }
`;

const NumberSelectionMobile = styled.div`
  @media (max-width: 320px) {
    background-color: ${(props) => props.bcolor};
    display: flex;
    padding: 6px;
    border: 1px solid #ebebeb;
    color: ${(props) => props.color};
    /* background: #${(props) => props.color}; */
    font-weight: ${(props) => props.weight};
    font-size: 14px;
    margin-right: 3px;
    cursor: pointer;
  }
`;

const PriceContainerMobile = styled.div`
  @media (max-width: 320px) {
    margin-top: 40px;
    margin-left: -35px;
    margin-right: -25px;
    display: flex;
    justify-content: space-around;
  }
`;

const LeftMobile = styled.div`
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const DescontoMobile = styled.div`
  @media (max-width: 320px) {
    color: #e35442;
    font-size: 12px;
    text-decoration-line: line-through;
  }
`;

const RealPriceMobile = styled.div`
  @media (max-width: 320px) {
    color: #686868;
  }
`;

const DivideMobile = styled.div`
  @media (max-width: 320px) {
    color: #7f7f7f;
    font-size: 12px;
  }
`;

const RightMobile = styled.div`
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #32917b;
    width: 150px;
    height: 61px;
    border-radius: 3px;
  }
`;

const ButtonBagMobile = styled.div`
  @media (max-width: 320px) {
    text-transform: uppercase;
    text-align: center;
    color: white;
  }
`;

const ContainerDescriptionMobile = styled.div`
  @media (max-width: 320px) {
    margin-top: 30px;
    margin-left: -20px;
  }
`;

const TitleDescription = styled.div`
  @media (max-width: 320px) {
    color: #e0967e;
  }
`;

const Description = styled.div`
  @media (max-width: 320px) {
    margin-top: 15px;
    width: 250px;
    font-size: 14px;
  }
`;

const Scroll = () => {
  return (
    <Main>
      <WrapperMobile>
        <HeaderMobile>
          <TitleMobile>RASTEIRA TIRA DEDO</TitleMobile>
          <CodeMobile>RT 0568 | 03.07.0653</CodeMobile>
          <ImageMobile src={prodimg} />
          <ScrollMobile>
            <ImgVideo src={require("../img/icons/mobile/video.png")} />
            <ImgPoint1 src={require("../img/icons/mobile/point1.png")} />
            <ImgPoint0 src={require("../img/icons/mobile/point0.png")} />
            <ImgPoint0 src={require("../img/icons/mobile/point0.png")} />
            <ImgPoint0 src={require("../img/icons/mobile/point0.png")} />
            <ImgPoint0 src={require("../img/icons/mobile/point0.png")} />
          </ScrollMobile>
          <ColorContainerMobile>
            <ColorTextMobile>Cor:</ColorTextMobile>
            <ColorImgMobile>
              <VinhoMobile src={require("../img/Colors/vinho.png")} />
              <AzulMobile src={require("../img/Colors/azul.png")} />
              <MarromMobile src={require("../img/Colors/marrom.png")} />
              <PretoMobile src={require("../img/Colors/preto.png")} />
            </ColorImgMobile>
          </ColorContainerMobile>
          <SizeContainerMobile>
            <SizeLetterMobile>Tamanho:</SizeLetterMobile>
            <SizeGuideMobile>Guia de Medidas</SizeGuideMobile>
          </SizeContainerMobile>
          <NumberContainerMobile>
            <NumberSelectionMobile color="#5F75AA">33</NumberSelectionMobile>
            <NumberSelectionMobile color="#5F75AA">34</NumberSelectionMobile>
            <NumberSelectionMobile color="#5F75AA">35</NumberSelectionMobile>
            <NumberSelectionMobile color="#5F75AA">36</NumberSelectionMobile>
            <NumberSelectionMobile bcolor="#DE8F75" weight="600" color="white">
              37
            </NumberSelectionMobile>
            <NumberSelectionMobile color="#5F75AA">38</NumberSelectionMobile>
            <NumberSelectionMobile color="#5F75AA">39</NumberSelectionMobile>
            <NumberSelectionMobile color="#5F75AA">40</NumberSelectionMobile>
          </NumberContainerMobile>

          <PriceContainerMobile>
            <LeftMobile>
              <DescontoMobile>R$ 69,00</DescontoMobile>
              <RealPriceMobile>R$ 55,20</RealPriceMobile>
              <DivideMobile>Ou 6x de R$ 9,20</DivideMobile>
            </LeftMobile>
            <RightMobile>
              <ButtonBagMobile>Adicionar à sacola</ButtonBagMobile>
            </RightMobile>
          </PriceContainerMobile>

          <ContainerDescriptionMobile>
            <TitleDescription>Descrição</TitleDescription>
            <Description>
              Rasteira em atanado soft com tira no dedo e fechamento de fivela.
              Possui sola sempre na cor do cabedal.
            </Description>
          </ContainerDescriptionMobile>
        </HeaderMobile>
      </WrapperMobile>
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
    </Main>
  );
};

export default Scroll;
