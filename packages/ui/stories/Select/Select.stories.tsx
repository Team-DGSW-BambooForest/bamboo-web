import { BambooThemeProvider } from "@bamboo/styled-theme";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "ui/Select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof Select>;

const CHOOSE_ITEMS = [
  { name: "강성훈", img: null },
  { name: "익명이", img: null },
];

const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <BambooThemeProvider mode="light">
      <Select {...args} />
    </BambooThemeProvider>
  );
};

export const Common = Template.bind({});

Common.args = {
  items: CHOOSE_ITEMS,
};
