import React from "react";
import styled from "styled-components";
import Cartitens from "./Cartitens";

const Container = styled.div`
  background-color: #20202099;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 525px;
  justify-content: space-between;
`;
const Position = styled.div`
  margin-top: -10px;
`;
const Header = styled.div`
  margin-top: -10px;
  margin-left: 40px;
`;
const Title = styled.div`
  color: #de8f75;
  font-size: 26px;
`;
const SubTitle = styled.div`
  color: #aeb6c1;
  font-size: 18px;
`;

const Divider = styled.div`
  border-top: 1px solid #e3e3e3;
  width: 466px;
  margin-top: 10px;
  margin-left: -15px;
`;

const CloseButton = styled.div`
  margin-top: 25px;
  margin-right: 12px;
  display: flex;
  position: relative;
  justify-content: right;
  cursor: pointer;
`;
const Xbutton = styled.img`
  display: flex;
  margin-left: 12px;
`;

const Items = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
`;
const Top = styled.div`
  width: 100%;
  background-color: #aeb6c1;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Bottom = styled.div`
  width: 100%;
  height: 90px;
  background-color: #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterTopText = styled.div`
  color: #ffffff;
  font-weight: 300;
`;
const FooterTopText2 = styled.div`
  color: #ffffff;
  font-weight: 700;
`;

const BottomInside = styled.div`
  display: flex;
  gap: 38px;
`;
const LeftSide = styled.div``;
const TotalPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
const TotalDivide = styled.div`
  font-size: 12px;
`;
const RightSide = styled.div``;
const FinishButton = styled.button`
  width: 236px;
  height: 42px;
  border: none;
  background-color: #32917b;
  color: white;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 12px;
`;

const Minicart = ({ onChange }) => {
  return (
    <Container>
      <RightContainer>
        <Header>
          <CloseButton>
            <Xbutton
              onClick={onChange}
              src={require("../img/icons/x.png")}
            ></Xbutton>
          </CloseButton>
          <Position>
            <Title>Sacola</Title>
            <SubTitle>5 itens</SubTitle>
            <Divider></Divider>
            <Items>
              <Cartitens
                name="Rasteira Tira Dedo"
                photo={require("../img/product/sprod1.png")}
              />
              <Cartitens
                name="Rasteira Tira Dedo"
                photo={require("../img/product/sprod2.png")}
              />
              <Cartitens
                name="Bolsa Tressê Rolotê"
                photo={require("../img/product/sprod3.png")}
              />
              <Cartitens
                name="Rasteira Tira Dedo"
                photo={require("../img/product/sprod4.png")}
              />
              <Cartitens
                name="Rasteira Tira Dedo"
                photo={require("../img/product/sprod1.png")}
              />
            </Items>
          </Position>
        </Header>
        <Footer>
          <Top>
            <FooterTopText>Faltam R$ xx,xx para você</FooterTopText>
            <FooterTopText2>Ganhar Frete Grátis</FooterTopText2>
          </Top>
          <Bottom>
            <BottomInside>
              <LeftSide>
                <TotalPrice>Total: R$ 149,00</TotalPrice>
                <TotalDivide>até 3x de R$ 49,90 sem juros</TotalDivide>
              </LeftSide>
              <RightSide>
                <FinishButton>Finalizar compra</FinishButton>
              </RightSide>
            </BottomInside>
          </Bottom>
        </Footer>
      </RightContainer>
    </Container>
  );
};

export default Minicart;
