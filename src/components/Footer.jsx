import React from "react";
import styled from "styled-components";
import brandeoriginal from "../img/originalw.svg";
import FooterMobile from "./FooterMobile";

const MainContainer = styled.div`
  display: flex;
  margin-top: 144px;
  height: 229px;
  border-top: 2px solid #aeb6c1;
  @media (max-width: 320px) {
    display: none;
  }
`;

const SocialVtex = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: right;
`;
const Institucional = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Informacoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Conheca = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Vtexz = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  background-color: white;
  width: 250px;
  height: 137px; ;
`;

const Ull = styled.ul`
  list-style: none;
`;
const Lii = styled.li`
  padding-bottom: 10px;
  font-size: 12px;
`;

const ContainerCircle = styled.div`
  flex: 1;
  display: flex;
`;

const Circle = styled.div`
  background-color: white;
  border: 2px solid #aeb6c1;
  width: 293px;
  height: 293px;
  margin-left: -19px;
  margin-top: -106px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const SocialMedias = styled.div`
  display: flex;
  position: relative;
  top: -30px;
  gap: 30px;
`;
const Selos = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  justify-content: right;
`;

const Title = styled.div`
  font-weight: 700;
  color: #aeb6c1;
  padding-bottom: 8px;
  font-size: 12px;
`;
const Vtex = styled.img``;
const Social = styled.img``;

const Container = styled.div``;
const FinalContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: #de8f75;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  align-items: center;
  @media (max-width: 320px) {
    display: none;
  }
`;

const FooterText = styled.div`
  width: 50%;
  color: white;
  font-size: 12px;
  font-weight: 200;
`;

const FooterImage = styled.div`
  display: flex;
  justify-content: right;
  width: 50%;
`;

const Brand = styled.img``;

const CircleInput = styled.div`
  display: flex;
  flex-direction: column;
`;
const CircleTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
const InputName = styled.input`
  width: 216px;
  height: 39px;
  border-style: none;
  border-bottom: 2px solid #aeb6c1;
  outline: none;
`;
const InputEmail = styled.input`
  width: 216px;
  height: 39px;
  border-style: none;
  border-bottom: 2px solid #aeb6c1;
  outline: none;
`;

const Name = styled.div`
  font-size: 12px;
`;

const InputButton = styled.button`
  border-radius: 3px;
  height: 50px;
  width: 110px;
  text-transform: uppercase;
  background: #de8f75;
  border: none;
  cursor: pointer;
  outline: inherit;
  color: #fff;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Mobile = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: block;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Mobile>
        <FooterMobile />
      </Mobile>
      <MainContainer>
        <SocialVtex>
          <Vtexz>
            <SocialMedias>
              <Social src={require("../img/Seal/face.png")} />
              <Social src={require("../img/Seal/insta.png")} />
              <Social src={require("../img/Seal/pint.png")} />
            </SocialMedias>
            <Selos>
              <Vtex src={require("../img/Seal/vtex.png")} />
              <Vtex src={require("../img/Seal/selo.png")} />
            </Selos>
          </Vtexz>
        </SocialVtex>
        <Institucional>
          <Ull>
            <Title>INSTITUCIONAL</Title>
            <Lii>A marca</Lii>
            <Lii>Lojas</Lii>
            <Lii>Contato</Lii>
          </Ull>
        </Institucional>
        <Informacoes>
          <Ull>
            <Title>INFORMAÇÕES</Title>
            <Lii>Formas de pagamento</Lii>
            <Lii>Trocas e devoluções</Lii>
            <Lii>Cuidados com o produto</Lii>
          </Ull>
        </Informacoes>
        <Conheca>
          <Ull>
            <Title>CONHEÇA</Title>
            <Lii>Franquias e Multimarcas</Lii>
            <Lii>Trabalhe com a gente</Lii>
            <Lii>Procon-RJ</Lii>
          </Ull>
        </Conheca>
        <ContainerCircle>
          <Circle>
            <CircleTitle>Assine nossa news</CircleTitle>
            <CircleInput>
              <Name>Nome</Name>
              <InputName value="Renata" />
              <InputEmail placeholder="E-mail" />
              <ButtonContainer>
                <InputButton>ENVIAR</InputButton>
              </ButtonContainer>
            </CircleInput>
          </Circle>
        </ContainerCircle>
      </MainContainer>
      <FinalContainer>
        <FooterText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          molestie massa in nunc condimentum, vel placerat lacus pulvinar.
          Suspendisse vel nisl eu tortor feugiat tempus vel in tortor. Nunc
          semper leo nec tellus gravida faucibus.{" "}
        </FooterText>
        <FooterImage>
          <Brand src={brandeoriginal} />
        </FooterImage>
      </FinalContainer>
    </Container>
  );
};

export default Footer;
