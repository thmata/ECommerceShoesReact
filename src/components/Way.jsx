import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 2.375rem;
  width: 9.625rem;
  @media (max-width: 320px) {
    display: none;
  }
`;

const Item = styled.div`
  margin-right: 5px;
  font-weight: ${(props) => props.weight};
  color: #aeb6c1;
  font-size: 12px;
`;

const Way = () => {
  return (
    <Container>
      <Item weight="400">Home</Item>
      <Item>/</Item>
      <Item weight="700"> Sapatos </Item>
    </Container>
  );
};

export default Way;
