import React from "react";
import styled from "styled-components";
import brand from "../img/originalw.svg";

const Container = styled.div`
  margin-top: 65px;

  border-top: 2px solid #aeb6c1;
`;
const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  align-items: center;
  border-bottom: 1px solid #aeb6c171;
`;
const Text = styled.div`
  margin-left: 20px;
  color: #aeb6c1;
`;
const More = styled.div`
  margin-right: 19px;
  color: #aeb6c1;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100;
`;
const Social = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-around;
  width: 180px;
`;

const Selos = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-around;
  margin-left: -25px;
  margin-right: -25px;
`;
const Face = styled.img``;
const Insta = styled.img``;
const Pint = styled.img``;
const Vtex = styled.img``;
const Ebit = styled.img``;

//Forms

const Forms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;
const TitleForms = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #aeb6c1;
`;
const Inputt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin-left: 20px;
`;
const Name = styled.div`
  font-size: 12px;
  text-align: left;
  color: #20202080;
`;
const InputName = styled.input`
  width: 290px;
  height: 39px;
  border-style: none;
  border-bottom: 2px solid #aeb6c1;
  outline: none;
`;
const InputEmail = styled.input`
  width: 196px;
  height: 39px;
  border-style: none;
  border-bottom: 2px solid #aeb6c1;
  outline: none;
  margin-top: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const InputButton = styled.button`
  border-radius: 3px;
  height: 40px;
  width: 80px;
  text-transform: uppercase;
  background: #de8f75;
  border: none;
  cursor: pointer;
  outline: inherit;
  color: #fff;
  margin-top: 10px;
`;

const LeftSidee = styled.div`
  display: flex;
  align-items: left;
`;

const BottomFooter = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background-color: #de8f75;
`;
const TextBottom = styled.div`
  padding: 15px;
  color: #ffffff;
  font-size: 12px;
  line-height: 163.42%;
`;
const Brand = styled.img`
  padding: 15px;
`;

const FooterMobile = () => {
  return (
    <Container>
      <Bar>
        <Text>INSTITUCIONAL</Text>
        <More>+</More>
      </Bar>
      <Bar>
        <Text>INFORMAÇÕES</Text>
        <More>+</More>
      </Bar>
      <Bar>
        <Text>CONHEÇA</Text>
        <More>+</More>
      </Bar>
      <Center>
        <SocialContainer>
          <Social>
            <Face src={require("../img/Seal/face.png")} />
            <Insta src={require("../img/Seal/insta.png")} />
            <Pint src={require("../img/Seal/pint.png")} />
          </Social>
          <Selos>
            <Vtex src={require("../img/Seal/vtex.png")}></Vtex>
            <Ebit src={require("../img/Seal/selo.png")}></Ebit>
          </Selos>
        </SocialContainer>
      </Center>
      <Forms>
        <TitleForms>Assine nossa news</TitleForms>
        <Inputt>
          <LeftSidee>
            <Name>Nome</Name>
          </LeftSidee>
          <InputName value="Renata" />
          <ButtonContainer>
            <InputEmail placeholder="E-mail" />
            <InputButton>ENVIAR</InputButton>
          </ButtonContainer>
        </Inputt>
      </Forms>
      <BottomFooter>
        <TextBottom>
          Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP. Av.das
          Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro
          - RJ - CEP: 22640-100 CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 -
          E-mail: ecommerce@viamia.com.br
        </TextBottom>
        <Brand src={brand} />
      </BottomFooter>
    </Container>
  );
};

export default FooterMobile;
