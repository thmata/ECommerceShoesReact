import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 3.125rem;
  border: 1px solid #cccccc;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 12px;
  margin-right: 0.7rem;
  color: #686868;
`;
const MenuItem2 = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem>ENTRAR </MenuItem>
          <MenuItem>l</MenuItem>
          <MenuItem>CADASTRA-SE</MenuItem>
        </Left>
        <Center>
          <MenuItem2>SAPATOS</MenuItem2>
          <MenuItem2>BOLSAS</MenuItem2>
          <MenuItem2>BOLSAS</MenuItem2>
          <MenuItem2>BOLSAS</MenuItem2>
        </Center>
        <Right>xerecaasdasdadsdasdasdasdasd</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
