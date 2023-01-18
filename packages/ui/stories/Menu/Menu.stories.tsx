import { BambooThemeProvider } from "@bamboo/styled-theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu, MenuItem } from "./Menu";

import { Wrapper } from "../Wrapper/Wrapper";
import { Avatar } from "../Avatar/Avatar";

export default {
  title: "ui/Menu",
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof Menu>;

const IMG_URL =
  "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg";

const Template: ComponentStory<typeof Menu> = (args) => (
  <BambooThemeProvider mode="light">
    <div style={{ height: "100px" }}>
      <Wrapper flex>
        <Avatar src={IMG_URL} size="sm" style={{ marginRight: "8px" }} />
        <div style={{ marginRight: "12px" }}>메뉴 입니다</div>
        <Menu {...args} />
      </Wrapper>
    </div>
  </BambooThemeProvider>
);

export const Common = Template.bind({});

Common.args = {
  children: (
    <>
      <MenuItem>수정</MenuItem>
      <MenuItem>삭제</MenuItem>
    </>
  ),
};
