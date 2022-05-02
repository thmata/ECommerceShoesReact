import React from "react";
import styled from "styled-components";
import Cartitens from "./Cartitens";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Header = styled.div``;
const CloseButton = styled.div`
  /* margin-top: 20%;
  margin-left: 275%; */
`;
const Xbutton = styled.img``;
const Right = styled.div`
  /* margin-top: -37%;
  margin-left: -170%;
  border: 1px solid; */
`;
const Position = styled.div``;
const Title = styled.div`
  color: #de8f75;
  font-size: 18px;
`;
const SubTitle = styled.div`
  color: #aeb6c1;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 8px;
`;
const Insider = styled.div`
  width: 320px;
  padding: 20px;
`;
const Divider = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
`;

const ItensInside = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: 7px;
`;
const Items = styled.div`
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow: auto;
`;
const Footer = styled.div`
  height: 103px;
`;
const Top = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #aeb6c1;
  font-size: 14px;
  color: white;
`;
const FooterTopText = styled.div``;
const FooterTopText2 = styled.div``;
const BottomInside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 63px;
  gap: 15px;
`;
const Bottom = styled.div`
  background: #e3e3e3;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
const TotalPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #686868;
`;
const TotalDivide = styled.div`
  font-size: 12px;
  color: #686868;
  width: 138.97px;
`;
const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #32917b;
  width: 120.7px;
  height: 40px;
  border-radius: 3px;
  color: white;
  font-size: 12px;
`;
const FinishButton = styled.div``;

const MiniCartMobile = ({ onClose }) => {
  return (
    <Container>
      <Header>
        <Insider>
          <Divider>
            <Right>
              <Title>Sacola</Title>
              <SubTitle>5 itens</SubTitle>
            </Right>
            <CloseButton>
              <Xbutton
                onClick={onClose}
                src={require("../img/icons/x.png")}
              ></Xbutton>
            </CloseButton>
          </Divider>
        </Insider>
        <Position>
          <ItensInside>
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
              <Cartitens
                name="Rasteira Tira Dedo"
                photo={require("../img/product/sprod1.png")}
              />
              <Cartitens
                name="Rasteira Tira Dedo"
                photo={require("../img/product/sprod1.png")}
              />
              <Cartitens
                name="Rasteira Tira Dedo"
                photo={require("../img/product/sprod1.png")}
              />
              <Cartitens
                name="Rasteira Tira Dedo"
                photo={require("../img/product/sprod1.png")}
              />
            </Items>
          </ItensInside>
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
    </Container>
  );
};

export default MiniCartMobile;
