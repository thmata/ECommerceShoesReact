import React from "react";
import styled from "styled-components";
import { OtherProductss } from "../data";

const Container = styled.div``;
const ColorContainer = styled.div``;
const Image = styled.img``;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Price = styled.div`
  color: #202020;
`;
const Color = styled.img`
  height: 13.04px;
  cursor: pointer;
`;

const Title = styled.div``;

export const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Bottom>
        <Price>{item.price}</Price>
        <ColorContainer>
          {item.color.map((e) => (
            <Color src={e.src} />
          ))}
        </ColorContainer>
      </Bottom>
    </Container>
  );
};
