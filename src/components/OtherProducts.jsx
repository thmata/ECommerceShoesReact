import React from "react";
import styled from "styled-components";
import { OtherProductss } from "../data";
import { Product } from "./Product";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 13.4px;
  margin-top: 15px;
`;
const Image = styled.img``;
const Bottom = styled.div``;
const Price = styled.div``;
const Colors = styled.div``;
const BigContainer = styled.div`
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #de8f75;
  font-size: 26px;
`;

const ButtonLeft = styled.img``;
const ButtonRight = styled.img``;
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
const OtherProducts = () => {
  return (
    <BigContainer>
      {" "}
      <Title>QUEM VIU, VIU TAMBÉM</Title>
      <Container>
        {OtherProductss.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
      <ButtonScroll>
        <Circle>
          <ButtonLeft src={require("../img/icons/buttonleft.png")} />{" "}
        </Circle>
        <Text>1 de 3</Text>
        <Circle>
          <ButtonRight src={require("../img/icons/buttonright.png")} />
        </Circle>
      </ButtonScroll>
    </BigContainer>
  );
};

export default OtherProducts;

// const Container = styled.div`
//   display: flex;
//   height: 500px;
//   width: 1200px;
// `;
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 10px;
// `;
// const Image = styled.img``;

// const Info = styled.div``;

// <Container>
//     <Wrapper>
//       <Image src={item.img} />
//     </Wrapper>
//   ))}
// </Container>
