import React from "react";
import HomeSideBarFooter from "./HomeSideBarFooter/HomeSideBarFooter";
import HomeSideBarItem from "./HomeSideBarItem/HomeSideBarItem";
import { HomeSideBarContainer } from "./HomeSideBar.style";

const HomeSideBar = () => {
  return (
    <HomeSideBarContainer>
      <HomeSideBarItem />
      <HomeSideBarFooter />
    </HomeSideBarContainer>
  );
};
export default HomeSideBar;
