import React from "react";
import styled from "styled-components";
import ShoesSvg from "../img/product/prod.svg";

const ContainerBackground = styled.div`
  background-color: #20202099;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  margin: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContainer = styled.div`
  background: #ffffff;
  width: 445px;
  height: 602px;
  border-radius: 3px;
  @media (max-width: 320px) {
    margin-top: 0%;
    width: 290px;
    height: 430px;
  }
`;
const SideButton = styled.div`
  display: flex;
  justify-content: right;
  padding: 17px;
  /* margin-right: 17px;
  margin-top: 17px; */
`;
const CloseButton = styled.img``;
const InsideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 320px) {
  }
`;
const ProductImage = styled.img`
  width: 305px;
  height: 358.65px;
  @media (max-width: 320px) {
    width: 190px;
    height: 246.34px;
  }
`;

const SucessfullMobile = styled.div`
  @media (max-width: 320px) {
    margin-top: -20px;
    width: 50px;
    font-size: 16px;
    width: 305px;
    display: flex;
    text-align: center;
    color: #de8f75;
  }
`;
const Sucessfull = styled.div`
  margin-top: 12px;
  font-size: 22px;
  width: 305px;
  display: flex;
  text-align: center;
  color: #de8f75;
  @media (max-width: 320px) {
    display: none;
  }
`;
const FinishButton = styled.button`
  border-radius: 3px;
  height: 50px;
  width: 305px;
  text-transform: uppercase;
  background: #32917b;
  border: none;
  cursor: pointer;
  outline: inherit;
  color: #fff;
  margin-top: 10px;

  @media (max-width: 320px) {
    width: 190px;
  }
`;
const CotinueButton = styled.div`
  font-size: 14px;
  color: #aeb6c1;
  text-decoration: underline;
  margin-top: 12px;
`;
const TopMobile = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    width: 200px;
  }
`;

const Modal = ({ onClose = () => {} }) => {
  return (
    <ContainerBackground>
      <CenterContainer>
        <SideButton>
          <CloseButton onClick={onClose} src={require("../img/icons/x.png")} />
        </SideButton>
        <InsideContainer>
          <TopMobile>
            <SucessfullMobile>PRODUTO ADICIONADO COM SUCESSO!</SucessfullMobile>
          </TopMobile>
          <ProductImage src={ShoesSvg} />
          <Sucessfull>PRODUTO ADICIONADO COM SUCESSO!</Sucessfull>
          <FinishButton>Finalizar compra</FinishButton>
          <CotinueButton>Continuar Comprando</CotinueButton>
        </InsideContainer>
      </CenterContainer>
    </ContainerBackground>
  );
};

export default Modal;
