import React from "react";
import styled from "styled-components";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { useEffect } from "react";
import ScrollTop from "../../../util/ScrollTop";

const ScrollButton = () => {
  const { scrollToTop } = ScrollTop();
  return (
    <ScrollButtonContainer onClick={scrollToTop}>
      <AiOutlineVerticalAlignTop />
    </ScrollButtonContainer>
  );
};

export default ScrollButton;

export const ScrollButtonContainer = styled.button`
  position: fixed;
  bottom: 68px;
  right: 574px;

  width: 56px;
  height: 56px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border: none;
  &:hover {
    background: linear-gradient(180deg, #49e7ba 0%, #37dc81 100%);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
`;
