import { BambooThemeProvider } from "@bamboo/styled-theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu, MenuItem } from "./Menu";

import { Wrapper } from "../Wrapper/Wrapper";

export default {
  title: "ui/MenuItem",
  component: MenuItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof MenuItem>;

const IMG_URL =
  "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg";

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <BambooThemeProvider mode="light">
    <div style={{ height: "100px" }}>
      <Wrapper flex align="center">
        <Menu>
          <MenuItem {...args} />
          <MenuItem {...args} />
        </Menu>
      </Wrapper>
    </div>
  </BambooThemeProvider>
);

export const Common = Template.bind({});

Common.args = {
  action: () => {},
  children: "item",
};
