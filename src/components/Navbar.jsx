import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Minicart from "./Minicart";

const Container = styled.div`
  height: 3.125rem;
  border: 1px solid #cccccc;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.85rem;
`;

const Left = styled.div`
  display: flex;
  margin-left: 2.5rem;
`;
const Center = styled.div`
  display: flex;
`;
const Right = styled.div`
  display: flex;
  margin-right: 2.5rem;
`;
const MenuItem = styled.div`
  margin-left: 0.5rem;
  color: #686868;
  font-size: 12px;
  cursor: ${(props) => props.cursor};
`;
const MenuItemCenter = styled.div`
  margin-left: 4.2rem;
  color: #686868;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(104, 104, 104, 0.4);
  height: 1.5rem;
  width: 4.7rem;
  margin-right: 3rem;
`;
const Input = styled.input`
  border: 0;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 8px;
  height: 1.5rem;
  width: 3rem;
  outline: none;
  margin-top: 7px;
`;

const Image = styled.img``;

const BagContainer = styled.div`
  display: flex;
  /* border: 1px solid black; */
  align-items: center;
  height: 1.6rem;
  width: 3rem;
`;
const ImageBag = styled.img`
  cursor: pointer;
`;
const BagCout = styled.div``;

const Navbar = () => {
  const [miniCartVisible, setMiniCartVisible] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuItem cursor="pointer">ENTRAR </MenuItem>
          <MenuItem cursor="0">l</MenuItem>
          <MenuItem cursor="pointer">CADASTRA-SE</MenuItem>
        </Left>
        <Center>
          <MenuItemCenter>SAPATOS</MenuItemCenter>
          <MenuItemCenter>BOLSAS</MenuItemCenter>
          <MenuItemCenter>ACESSÓRIOS</MenuItemCenter>
          <MenuItemCenter>OFF</MenuItemCenter>
        </Center>
        <Right>
          <SearchContainer>
            <Image src={require("../img/icons/search.png")} />
            <Input placeholder="Busca" />
          </SearchContainer>
          <BagContainer>
            <ImageBag
              onClick={() => setMiniCartVisible(!miniCartVisible)}
              src={require("../img/icons/bag.png")}
            />
            {miniCartVisible ? (
              <Minicart onChange={() => setMiniCartVisible(false)} />
            ) : null}
            <BagCout>0</BagCout>
          </BagContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
