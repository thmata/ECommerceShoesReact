import React from "react";
import styled from "styled-components";

const Container = styled.h1`
  /* width: 80rem; */
  height: 5.375rem;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 2.125rem;
`;

const Header = () => {
  return (
    <Container>
      <Image src={require("../img/Vector.png")} />
    </Container>
  );
};

export default Header;
