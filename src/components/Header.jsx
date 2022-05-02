import React from "react";
import styled from "styled-components";
import brandeoriginal from "../img/Vector.svg";

const Container = styled.h1`
  /* width: 80rem; */
  height: 5.375rem;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 320px) {
    height: 60px;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -45px;
  }
`;

const Image = styled.img`
  height: 2.125rem;

  @media (max-width: 320px) {
    width: 110px;
  }
`;

const ButtonsMobile = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100;
    margin-right: 16px;
    margin-left: 17px;
    margin-top: 18px;
  }
`;

const MenuMobile = styled.img`
  display: none;
  @media (max-width: 320px) {
    display: block;
    height: 14px;
  }
`;

const SearchMobile = styled.img`
  display: none;
  @media (max-width: 320px) {
    display: block;
    height: 21px;
  }
`;

const BagMobile = styled.img`
  display: none;
  @media (max-width: 320px) {
    height: 26.83px;
    display: block;
  }
`;

const ContainerRight = styled.div`
  display: none;
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

const Main = styled.div``;

const Header = () => {
  return (
    <Main>
      <ButtonsMobile>
        <MenuMobile src={require("../img/icons/mobile/menu.png")} />
        <ContainerRight>
          <SearchMobile src={require("../img/icons/mobile/search.png")} />
          <BagMobile src={require("../img/icons/mobile/bag.png")} />
        </ContainerRight>
      </ButtonsMobile>
      <Container>
        <Image src={brandeoriginal} />
      </Container>
    </Main>
  );
};

export default Header;
