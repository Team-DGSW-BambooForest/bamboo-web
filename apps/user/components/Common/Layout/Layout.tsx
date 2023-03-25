import React from "react";
import styled from "styled-components";
import { OnlyChildrenProps } from "../../../types/OnlyChildren";

const Layout = ({ children }: OnlyChildrenProps) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

const LayoutStyle = styled.div`
  padding-top: 80px;
  padding-left: 19%;
`;

export default Layout;
