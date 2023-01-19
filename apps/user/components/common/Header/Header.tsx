import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderStyle>header</HeaderStyle>;
};

const HeaderStyle = styled.div`
  /* position */
  position: fixed;
  top: 0;
  left: 0;

  /* size */
  width: 100%;
  height: 80px;

  /* color */
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export default Header;
