import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemImage = styled.img`
  width: 46px;
  height: 59px;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
`;
const Name = styled.div`
  font-size: 12px;
`;
const Price = styled.div`
  font-weight: 700;
`;
const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
const Less = styled.div`
  color: #aeb6c1;
  font-weight: 900;
  font-size: 20px;
`;
const Cout = styled.div`
  font-size: 14px;
  color: #5f75aa;
`;

const More = styled.div`
  color: #aeb6c1;
  font-weight: 900;
  font-size: 20px;
`;
const ContainerRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
`;
const ButtonX = styled.div`
  color: #cccccc;
  font-size: 13px;
`;

const Cartitens = (props) => {
  return (
    <Container>
      <ItemImage src={props.photo} />
      <Info>
        <Name>{props.name}</Name>
        <Price>R$ 49,90</Price>
      </Info>
      <Quantity>
        <Less>-</Less>
        <Cout>01</Cout>
        <More>+</More>
      </Quantity>
      <ContainerRemove>
        <ButtonX>X</ButtonX>
      </ContainerRemove>
    </Container>
  );
};

export default Cartitens;
