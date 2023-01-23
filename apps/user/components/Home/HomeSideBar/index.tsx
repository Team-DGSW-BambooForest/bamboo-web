import React from "react";
import HomeSideBarFooter from "./HomeSideBarFooter";
import HomeSideBarItem from "./HomeSideBarItem";
import { HomeSideBarContainer } from "./style";

const HomeSideBar = () => {
  return (
    <HomeSideBarContainer>
      <HomeSideBarItem />
      <HomeSideBarFooter />
    </HomeSideBarContainer>
  );
};
export default HomeSideBar;
