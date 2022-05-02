import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Way from "../components/Way";
import ProductPage from "../components/ProductPage";
import OtherProducts from "../components/OtherProducts";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Minicart from "../components/Minicart";

const Limit = styled.div`
  display: flex;
  justify-content: center;
`;

const Limit2 = styled.div`
  margin-left: 50px;
`;

// const Limit2 = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-left: 50px;
//   margin-right: 50px;
// `;
const home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Limit2>
        <Way />
      </Limit2>
      <Limit>
        <ProductPage display="flex" />
      </Limit>
      <OtherProducts />
      <Footer />
    </div>
  );
};

export default home;
