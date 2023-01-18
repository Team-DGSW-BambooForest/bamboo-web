import { BambooThemeProvider } from "@bamboo/styled-theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  title: "ui/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <BambooThemeProvider mode="light">
    <Avatar {...args} />
  </BambooThemeProvider>
);

const IMG_URL =
  "https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg";

export const Common = Template.bind({});

Common.args = {
  alt: "img",
  size: "md",
  src: IMG_URL,
};

export const Small = Template.bind({});
Small.args = {
  alt: "img",
  size: "sm",
  src: IMG_URL,
};

export const Medium = Template.bind({});
Medium.args = {
  alt: "img",
  size: "md",
  src: IMG_URL,
};

export const Large = Template.bind({});
Large.args = {
  alt: "img",
  size: "lg",
  src: IMG_URL,
};
