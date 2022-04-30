import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Way from "../components/Way";
import Scroll from "../components/Scroll";
import OtherProducts from "../components/OtherProducts";
import Footer from "../components/Footer";

const Limit = styled.div`
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
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
      <Limit>
        <Way />
      </Limit>
      <Limit>
        <Scroll display="flex" />
      </Limit>
      <OtherProducts />
      <Footer />
    </div>
  );
};

export default home;
