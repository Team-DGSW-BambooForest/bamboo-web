import React from "react";
import {
  HomeSideBarFooterBox,
  HomeSideBarFooterLinkBox,
  HomeSideBarFooterText,
  HomeSideFooterBottomText,
} from "./HomeSideBarFooter.style";
import { FooterOp } from "../../../../constant/footer";
const HomeSideBarFooter = () => {
  return (
    <HomeSideBarFooterBox>
      <HomeSideBarFooterLinkBox>
        {FooterOp.map((list) => (
          <>
            <HomeSideBarFooterText
              key={`${list.title}`}
              onClick={() => window.open(`${list.link}`)}
            >
              {list.title}
            </HomeSideBarFooterText>
          </>
        ))}
      </HomeSideBarFooterLinkBox>
      <HomeSideFooterBottomText>
        Copyright 2023. 대대숲 4기. All rights reserved.
      </HomeSideFooterBottomText>
    </HomeSideBarFooterBox>
  );
};

export default HomeSideBarFooter;
