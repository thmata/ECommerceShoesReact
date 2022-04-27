import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Way from "../components/Way";
import Scroll from "../components/Scroll";
import ProductImage from "../components/ProductImage";

const Limit = styled.div`
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
`;
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
        {/* <ProductImage display="flex" /> */}
      </Limit>
    </div>
  );
};

export default home;
